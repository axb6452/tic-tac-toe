#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/sign-out/${ID}" \
--include \
--request DELETE \
--header "Content-Type: application/json" \
--data '{

}'
