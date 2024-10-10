use tracing::info;
use tracing_subscriber;
use colored::Colorize;
pub(crate) fn init() {
    tracing_subscriber::fmt()
        .with_max_level(tracing::Level::INFO) // Ensure INFO level is set
        .with_target(false)
        .without_time() // Remove timestamp from log
        .with_level(false) // Remove log level from log
        .init();
}

pub fn verbose(content: &str) {
    info!("{}", content.yellow());
}

pub fn error(content: &str) {
    info!("{}", content.red());
}

pub fn message(content: &str) {
    info!("{}", content.blue());
}

pub fn success(content: &str) {
    info!("{}", content.green());
}
