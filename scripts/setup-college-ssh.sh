#!/usr/bin/env sh

set -eu

# One-time SSH setup for passwordless deploy to college server.
# Required env: COLLEGE_SSH_HOST, COLLEGE_SSH_USER
# Optional env: COLLEGE_SSH_PORT (default: 22), SSH_KEY_PATH (default: ~/.ssh/id_ed25519)

if [ -f ".env.deploy" ]; then
  # shellcheck disable=SC1091
  . ./.env.deploy
fi

SSH_HOST="${COLLEGE_SSH_HOST:-}"
SSH_USER="${COLLEGE_SSH_USER:-}"
SSH_PORT="${COLLEGE_SSH_PORT:-22}"
SSH_KEY_PATH="${SSH_KEY_PATH:-$HOME/.ssh/id_ed25519}"

if [ -z "$SSH_HOST" ] || [ -z "$SSH_USER" ]; then
  echo "Missing environment variables."
  echo "Set in .env.deploy or shell: COLLEGE_SSH_HOST, COLLEGE_SSH_USER"
  echo "Optional: COLLEGE_SSH_PORT, SSH_KEY_PATH"
  exit 1
fi

mkdir -p "$HOME/.ssh"
chmod 700 "$HOME/.ssh"

if [ ! -f "$SSH_KEY_PATH" ]; then
  echo "Generating SSH key at $SSH_KEY_PATH"
  ssh-keygen -t ed25519 -C "$SSH_USER@$SSH_HOST" -f "$SSH_KEY_PATH" -N ""
else
  echo "Using existing SSH key: $SSH_KEY_PATH"
fi

PUB_KEY="$SSH_KEY_PATH.pub"
if [ ! -f "$PUB_KEY" ]; then
  echo "Public key not found: $PUB_KEY"
  exit 1
fi

if command -v ssh-copy-id >/dev/null 2>&1; then
  echo "Installing key on remote server..."
  ssh-copy-id -i "$PUB_KEY" -p "$SSH_PORT" "$SSH_USER@$SSH_HOST"
else
  echo "ssh-copy-id not found. Trying fallback method..."
  cat "$PUB_KEY" | ssh -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" 'mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys'
fi

echo "Testing passwordless login..."
ssh -p "$SSH_PORT" -o BatchMode=yes -o ConnectTimeout=8 "$SSH_USER@$SSH_HOST" "echo SSH key auth OK"

echo "SSH setup complete."
