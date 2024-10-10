use clap::ValueEnum;

#[derive(ValueEnum, Debug, Clone)]
pub(crate) enum Framework {
    ///Javascript framework
    React,
    Vue,

    /// Python framework
    Flask,
    FastAPI,
    Django,

    /// golang framework
    Fiber,

    /// Rust framework
    Actix,
    Axum
}

#[derive(ValueEnum, Debug, Clone)]
pub(crate) enum Runtime {
    Bun,
    Deno,
}

#[derive(ValueEnum, Debug, Clone)]
pub(crate) enum Bundle {
    ///Javascript bundler
    Vite,
    Swc,

    /// Python bundler
    Pip,
    Uv,
    Poetry,

}
