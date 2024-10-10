use std::process::Command;
use clap::{Args, Parser, Subcommand};
use crate::master::{Bundle, Framework, Runtime};

#[derive(Parser, Debug)]
#[command(name = "scaf")]
#[command(version = "1.0")]
#[command(author = "itsparser <itsparser@gmail.com>")]
#[command(about = "An extremely fast and simple code scaffolding tool for various frameworks and libraries")]
pub(crate) struct ScaffoldCli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand, Debug)]
pub(crate) enum Commands {
    /// Create a new project scaffold
    New(NewOptions),
}

#[derive(Args, Debug)]
pub(crate) struct NewOptions {
    /// The framework to scaffold
    #[arg(value_enum)]
    framework: Framework,

    /// Specify the runtime to use
    #[arg(long, value_enum)]
    runtime: Option<Runtime>,

    /// Specify additional libraries to include
    #[arg(long, value_delimiter = ',')]
    lib: Option<Vec<String>>,

    /// Specify the bundler to use
    #[arg(long, value_enum)]
    bundle: Option<Bundle>,

    /// Specify pre-commit hooks to use
    #[arg(long, value_delimiter = ',')]
    pre_commit: Option<Vec<String>>,

    /// Name of the project
    #[arg(long)]
    name: Option<String>,

    /// Specify location to scaffold the project
    #[arg(long, default_value = "./project")]
    path: String,
}

impl ScaffoldCli {
    pub(crate) fn run(&self) {
        match &self.command {
            Commands::New(options) => {
                handle_new_command(options)
            }
        }
    }
}


//
// fn main() {
//     let cli = ScaffoldCli::parse();
//
//     match &cli.command {
//         Commands::New(options) => handle_new_command(options),
//     }
// }


fn handle_new_command(options: &NewOptions) {
    let folder = options.path.clone();
    println!("Creating a new {:?} project in folder: {}", options.framework, folder);

    if let Some(runtime) = &options.runtime {
        println!("Using {:?} as the runtime", runtime);
    }

    if let Some(libs) = &options.lib {
        println!("Including libraries: {:?}", libs);
    }

    if let Some(bundle) = &options.bundle {
        println!("Using bundler: {:?}", bundle);
    }

    if let Some(pre_commit_hooks) = &options.pre_commit {
        println!("Setting up pre-commit hooks: {:?}", pre_commit_hooks);
    }

    execute_scaffold_command(options, &folder);
}


fn execute_scaffold_command(options: &NewOptions, folder: &str) {
    match options.framework {
        Framework::React => {
            println!("Scaffolding React project...");
            run_command("npx", &vec!["create-react-app", folder]);

            if let Some(runtime) = &options.runtime {
                match runtime {
                    Runtime::Bun => run_command("bun", &vec!["install"]),
                    Runtime::Deno => println!("Deno is not typically used directly with React, skipping runtime setup..."),
                }
            }

            if let Some(bundle) = &options.bundle {
                match bundle {
                    Bundle::Vite => run_command("npm", &vec!["install", "vite"]),
                    Bundle::Swc => run_command("npm", &vec!["install", "@swc/core"]),
                    _ => println!("Bundler not applicable for React"),
                }
            }
        }
        Framework::Vue => {
            println!("Scaffolding Vue project...");
            run_command("npm", &vec!["init", "vue@latest", folder]);

            if let Some(runtime) = &options.runtime {
                match runtime {
                    Runtime::Bun => run_command("bun", &vec!["install"]),
                    Runtime::Deno => println!("Deno is not typically used directly with Vue, skipping runtime setup..."),
                }
            }

            if let Some(bundle) = &options.bundle {
                match bundle {
                    Bundle::Vite => run_command("npm", &vec!["install", "vite"]),
                    Bundle::Swc => run_command("npm", &vec!["install", "@swc/core"]),
                    _ => println!("Bundler not applicable for Vue"),
                }
            }
        }
        Framework::Flask => {
            println!("Scaffolding Flask project...");
            run_command("mkdir", &vec!["-p", folder]);
            run_command("pip", &vec!["install", "flask"]);

            if let Some(bundle) = &options.bundle {
                match bundle {
                    Bundle::Pip => println!("Using Pip as bundler for Flask..."),
                    Bundle::Uv => run_command("pip", &vec!["install", "uvicorn"]),
                    Bundle::Poetry => run_command("poetry", &vec!["add", "flask"]),
                    _ => println!("Bundler not applicable for Flask"),
                }
            }
        }
        _ => {}
    }

    if let Some(libs) = &options.lib {
        for lib in libs {
            match options.framework {
                Framework::Flask => run_command("pip", &vec!["install", lib]),
                _ => run_command("npm", &vec!["install", lib]),
            }
        }
    }

    if let Some(pre_commit_hooks) = &options.pre_commit {
        for hook in pre_commit_hooks {
            println!("Setting up pre-commit hook: {}", hook);
            // Add appropriate command to set up each pre-commit hook
        }
    }

    println!("Scaffolding completed!");
}

fn run_command(command: &str, args: &[&str]) {
    let status = Command::new(command)
        .args(args)
        .status()
        .expect("Failed to execute command");

    if !status.success() {
        eprintln!("Command `{}` failed with status: {}", command, status);
    }
}

