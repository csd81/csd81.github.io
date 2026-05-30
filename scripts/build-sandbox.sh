#!/usr/bin/env bash
# Build the Rust/egui "rmath sandbox" to WebAssembly and stage it under the
# site's public/ so `npm run build` ships it at /sandbox/.
#
# Requires: cargo, the wasm32-unknown-unknown target, and trunk.
#   rustup target add wasm32-unknown-unknown
#   cargo install --locked trunk
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WEB="$ROOT/rust_app/crates/web"
DEST="$ROOT/public/sandbox"

echo "▶ trunk build (release, public-url /sandbox/)…"
( cd "$WEB" && trunk build --release --public-url /sandbox/ )

echo "▶ staging into $DEST"
rm -rf "$DEST"
mkdir -p "$DEST"
cp "$WEB"/dist/* "$DEST/"

echo "✅ sandbox staged:"
ls -lh "$DEST"
