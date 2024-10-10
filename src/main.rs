use clap::Parser;

use cmd::ScaffoldCli;

use crate::error::Error;
use crate::logger::success;

pub(crate) mod cmd;
mod error;
mod logger;

mod options;

fn main() -> Result<(), Error> {
    logger::init(); // Initialize logger
    let cli = ScaffoldCli::parse();
    cli.run(); // Ensure this is called
    success("Scaffold generated successfully. Happy coding :)");
    Ok(())
}
