#!/bin/sh

INPUT_METHODS_DIR="/Library/Input Methods"
WETYPE_INSTALL_PATH="$INPUT_METHODS_DIR/WeType.app"
WXKB_INSTALL_PATH="$INPUT_METHODS_DIR/wxkbmac.app"
TMP_DIR="/tmp/wetype"
CUR_DIR=$(cd "$(dirname "$0")"; pwd)

echo "$(date +%H:%M:%S) unzip package"
rm -rf "TMP_DIR"
unzip -qq "$CUR_DIR/wetype.zip" -d "$TMP_DIR/"

echo "$(date +%H:%M:%S) kill WeType"
killall wxkbmac
#killall WeTypeFeedback
#killall WeType

echo "$(date +%H:%M:%S) remove old package if need"
if [ -d "$WXKB_INSTALL_PATH" ]; then
    rm -rf "$WXKB_INSTALL_PATH"
fi

echo "$(date +%H:%M:%S) move package to install path"
echo $WETYPE_INSTALL_PATH
if [ -d "$WETYPE_INSTALL_PATH" ]; then
    echo "$(date +%H:%M:%S) remove old package"
    rm -rf "$WETYPE_INSTALL_PATH"
fi
echo "$(date +%H:%M:%S) check input methods directory"

if [ -d "$INPUT_METHODS_DIR" ]; then
    echo "INPUT_METHODS_DIR exists"
else
    echo "INPUT_METHODS_DIR not exists, try create"
    mkdir "$INPUT_METHODS_DIR"
fi
echo "$(date +%H:%M:%S) move app bundle to destination directory"
mv -f "$TMP_DIR/WeType.app" "$INPUT_METHODS_DIR/"

sudo chown -R root:staff "$WETYPE_INSTALL_PATH" && sudo chmod -R 775 "$WETYPE_INSTALL_PATH"

xattr -d -r com.apple.quarantine "$WETYPE_INSTALL_PATH"

stillRunning=$(ps -ef | grep "System Preferences" | grep -v "grep")
if [ "$stillRunning" ] ; then
killall System\ Preferences
fi
killall SystemUIServer

echo "$(date +%H:%M:%S) finish"
