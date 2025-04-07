#!/bin/bash

# This script mirrors a website using wget, bypassing robots.txt

echo "Starting website mirror..."

wget \
--mirror \
--page-requisites \
--convert-links \
--adjust-extension \
--no-parent \
--directory-prefix=./web_static_copy \
--user-agent="MyMirrorBot/1.0 (WSL; Learning purpose)" \
--wait=1 \
-e robots=off \
http://127.0.0.1:5000

# Check wget's exit status (optional)
if [ $? -eq 0 ]; then
  echo "Mirroring process finished successfully."
else
  echo "Mirroring process finished with errors."
fi