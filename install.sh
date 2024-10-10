#!/bin/bash

# Variables
REPO="itsparser/scaf"  # Your GitHub repository
VERSION="latest"  # Use 'latest' for the latest version or specify a version tag like 'v1.0.0'
INSTALL_DIR="/usr/local/bin"  # Default installation directory
TMP_DIR=$(mktemp -d)  # Create a temporary directory for download

# Determine the OS and architecture
OS=$(uname -s | tr '[:upper:]' '[:lower:]')
ARCH=$(uname -m)

# Map OS to GitHub artifact names
case "$OS" in
    linux)
        OS="linux"
        ;;
    darwin)
        OS="macos"
        ;;
    mingw*|msys*|cygwin*)
        OS="windows"
        ;;
    *)
        echo "Unsupported OS: $OS"
        exit 1
        ;;
esac

# Map architecture names
case "$ARCH" in
    x86_64)
        ARCH="x86_64"
        ;;
    aarch64)
        ARCH="aarch64"
        ;;
    *)
        echo "Unsupported architecture: $ARCH"
        exit 1
        ;;
esac

# Determine file extension based on OS
if [ "$OS" == "windows" ]; then
    FILE_EXT="zip"
else
    FILE_EXT="tar.gz"
fi

# Construct the download URL for the artifact
if [ "$VERSION" == "latest" ]; then
    # Get the latest version tag from GitHub API
    VERSION=$(curl --silent "https://api.github.com/repos/$REPO/releases/latest" | grep -Po '"tag_name": "\K.*?(?=")')
fi

# Download URL for the artifact
ARTIFACT_URL="https://github.com/$REPO/releases/download/$VERSION/scaf-${OS}-${ARCH}.${FILE_EXT}"

# Download the artifact
echo "Downloading $ARTIFACT_URL ..."
curl -L "$ARTIFACT_URL" -o "$TMP_DIR/scaf.$FILE_EXT"

# Extract and install the binary
if [ "$OS" == "windows" ]; then
    # For Windows, use unzip
    unzip "$TMP_DIR/scaf.$FILE_EXT" -d "$TMP_DIR"
    mv "$TMP_DIR/scaf.exe" "$INSTALL_DIR/scaf.exe"
else
    # For Linux and macOS, use tar
    tar -xzf "$TMP_DIR/scaf.$FILE_EXT" -C "$TMP_DIR"
    sudo mv "$TMP_DIR/scaf" "$INSTALL_DIR/scaf"
fi

# Make the binary executable
chmod +x "$INSTALL_DIR/scaf"

# Clean up
rm -rf "$TMP_DIR"

# Verify installation
if command -v scaf &> /dev/null; then
    echo "scaf successfully installed!"
else
    echo "Installation failed. Please check your installation directory and permissions."
    exit 1
fi
