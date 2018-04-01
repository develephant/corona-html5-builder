#!/bin/bash

###############################################################################
## Corona HTML5 Node Kit - Plugin Builder
## (c)2018 C. Byerley (develephant)
###############################################################################

PARAMS=$1

BUILDER=~/"Library/Application Support/Corona/Native/Corona/mac/bin/CoronaBuilder.app/Contents/MacOS/CoronaBuilder"

"$BUILDER" build --lua ${PARAMS}

exit 0
