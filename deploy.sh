#!/usr/bin/env bash
set -e

ng test --watch=false
ng lint --fix

git add .
git commit -m "$1"
git push

ng build --prod
az storage blob upload-batch --account-name partytracker -s ./dist/party-tracker -d '$web'
