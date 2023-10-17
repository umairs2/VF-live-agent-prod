#!/bin/bash

set -e

git checkout --orphan pages2
git reset .
git add -f packages/react-chat/dist
git add -f packages/widget/dist
cp scripts/template.html index.html
git add index.html
git commit -m "initial" --no-verify
git push origin pages2 --force
git clean -fd .
