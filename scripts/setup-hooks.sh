#!/usr/bin/env sh
# Placeholder for git hook installation (pre-commit lint, etc.).
# Skipped automatically in CI / non-interactive environments.

# Skip in CI / Vercel / other non-interactive contexts.
if [ -n "$CI" ] || [ -n "$VERCEL" ] || [ ! -t 1 ]; then
  exit 0
fi

# Skip if not inside a git checkout (e.g. extracted tarball).
if [ ! -d ".git" ]; then
  exit 0
fi

# Local dev: future hook setup goes here.
exit 0
