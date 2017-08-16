#!/usr/bin/env bash

# Root project
cd ..

yarn run lint

yarn run test-ci
