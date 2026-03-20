#!/usr/bin/env sh

set -eu

# Fast deploy strategy:
# - build once locally
# - sync only changed files to college server using rsync
# - remove stale files on server with --delete

if [ -f ".env.deploy" ]; then
  # shellcheck disable=SC1091
  . ./.env.deploy
fi

DIST_DIR="dist"
SSH_HOST="${COLLEGE_SSH_HOST:-}"
SSH_USER="${COLLEGE_SSH_USER:-}"
WEB_ROOT="${COLLEGE_WEB_ROOT:-}"
SSH_PORT="${COLLEGE_SSH_PORT:-22}"

if [ -z "$SSH_HOST" ] || [ -z "$SSH_USER" ] || [ -z "$WEB_ROOT" ]; then
  echo "Missing environment variables."
  echo "Set in .env.deploy or shell: COLLEGE_SSH_HOST, COLLEGE_SSH_USER, COLLEGE_WEB_ROOT"
  echo "Optional: COLLEGE_SSH_PORT (default: 22)"
  exit 1
fi

if [ ! -d "$DIST_DIR" ]; then
  echo "dist/ not found. Run: npm run build:prod"
  exit 1
fi

REMOTE_TARGET="$SSH_USER@$SSH_HOST:$WEB_ROOT"
SSH_CMD="ssh -p $SSH_PORT"

echo "Ensuring remote directory exists..."
$SSH_CMD "$SSH_USER@$SSH_HOST" "mkdir -p '$WEB_ROOT'"

echo "Syncing dist/ to $REMOTE_TARGET"
rsync -az --delete \
  --omit-dir-times \
  --no-perms --no-owner --no-group \
  --progress \
  -e "$SSH_CMD" \
  "$DIST_DIR/" "$REMOTE_TARGET/"

echo "Deploy complete."
