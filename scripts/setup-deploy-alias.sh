#!/usr/bin/env sh

set -eu

REPO_DIR="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
PROFILE_FILE="$HOME/.zprofile"
ALIAS_LINE="alias deploy-college='cd $REPO_DIR && npm run deploy:college'"

if [ ! -f "$PROFILE_FILE" ]; then
  touch "$PROFILE_FILE"
fi

if grep -Fq "$ALIAS_LINE" "$PROFILE_FILE"; then
  echo "Alias already exists in $PROFILE_FILE"
else
  printf "\n# Fast deploy command for CSE_Mindroid\n%s\n" "$ALIAS_LINE" >> "$PROFILE_FILE"
  echo "Alias added to $PROFILE_FILE"
fi

echo "Run: source ~/.zprofile"
