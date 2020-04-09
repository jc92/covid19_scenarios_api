#!/bin/bash

# i don't want submodules for now

git clone --branch feat/fix-ts-for-backend git@github.com:brunorzn/covid19_scenarios.git tmp_folder && \
cd tmp_folder && \
yarn install && \
yarn schema:totypes && \
cd .. && \
rm -rf front && \
cp -r tmp_folder/src/ front && \
rm -rf tmp_folder && \
echo "update done !"