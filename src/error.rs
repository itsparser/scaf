use thiserror::Error as ThisError;

/// Library related errors that we are exposing to the rest of the workspaces.
#[derive(Debug, ThisError)]
pub enum Error {
    /// Error that may occur while I/O operations.
    #[error("IO error: `{0}`")]
    IoError(#[from] std::io::Error),
    /// Error that may occur when attempting to interpret a sequence of u8 as a
    /// string.
    #[error("UTF-8 error: `{0}`")]
    Utf8Error(#[from] std::str::Utf8Error),
    /// Error that may occur while parsing the command line arguments.
    #[error("Argument error: `{0}`")]
    ArgumentError(String),
    // Add any other errors that are actually used in your codebase
}

/// Result type of the core library.
pub type Result<T> = core::result::Result<T, Error>;

#[cfg(test)]
mod test {
    // Add tests here if needed
}