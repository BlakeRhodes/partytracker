#!/usr/bin/env bash
set -e
git add .
git commit -m "$1"
git push
ng lint --fix
ng build --prod
az storage blob upload-batch --account-name partytracker -s ./dist/party-tracker -d '$web'

