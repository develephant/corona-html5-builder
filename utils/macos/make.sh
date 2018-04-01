#!/bin/bash

PARAMS=$1

BUILDER=~/"Library/Application Support/Corona/Native/Corona/mac/bin/CoronaBuilder.app/Contents/MacOS/CoronaBuilder"

"$BUILDER" build --lua ${PARAMS}

exit 0
