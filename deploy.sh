#!/usr/bin/env bash
set -e

ng lint --fix
ng build --prod
az storage blob upload-batch --account-name partytracker -s ./dist/party-tracker -d '$web'

