# 🚀 Scaf - Code Scaffolding CLI Tool

`scaf` is an extremely fast and simple code scaffolding tool for various frameworks and libraries. It allows you to quickly set up project templates for frameworks like React, Vue, and Flask, with support for different runtimes, bundlers, and pre-commit hooks.

> 🎉 A huge thank you to ChatGPT, v0, and bolt for helping generate 80% of the code that made this project possible! Your assistance has been invaluable in bringing scaf to life. 🎉

![Scaf Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmR4azNhdTVyMXd0MGhvc2oyNDBzaXZtZnI3cjRneWVsZHZ1NWE5aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TXJiSN8vCERuE/giphy.gif)

## ✨ Features

- 🛠️ Scaffold new projects for popular frameworks: **React**, **Vue**, and **Flask**.
- ⚡ Choose the runtime: **Bun** or **Deno**.
- 📦 Specify additional libraries to include in your project.
- 📚 Use different bundlers such as **Vite**, **SWC**, **Pip**, **Uv**, and **Poetry**.
- ✅ Set up pre-commit hooks to maintain code quality.
- 📁 Optionally specify the folder where the project should be created.

## 📥 Installation

To install `scaf` on Linux, macOS, or Windows, use the following command:

```bash
curl -sSL https://github.com/itsparser/scaf/raw/main/install.sh | bash
```

## 📘 Usage

The `scaf` CLI tool provides an easy way to scaffold new projects. Below are some examples of how you can use the `scaf` command.

### 🔧 Commands

- **New**: Create a new project scaffold.

```sh
scaf new <framework> [OPTIONS]
```

### ⚙️ Options

- `--runtime <RUNTIME>`: Specify the JavaScript runtime to use (`bun` or `deno`).
- `--lib <LIBRARIES>`: Additional libraries to include, separated by commas (e.g., `--lib=shadcn,tailwind`).
- `--bundle <BUNDLER>`: Specify the bundler to use (`vite`, `swc`, `pip`, `uv`, `poetry`).
- `--pre-commit <HOOKS>`: Pre-commit hooks to set up, separated by commas (e.g., `--pre-commit=passleak,lint`).
- `--folder <FOLDER>`: Specify the folder where the project should be created.

### 📝 Example Usages

1. Create a React project using Bun:

   ```sh
   scaf new react --runtime=bun --folder=my-react-app
   ```

2. Create a Vue project with specific libraries and bundler:

   ```sh
   scaf new vue --runtime=bun --lib=shadcn,tailwind --bundle=vite --folder=my-vue-app
   ```

3. Create a Flask project with a bundler and pre-commit hooks:

   ```sh
   scaf new flask --bundle=poetry --lib=sqlalchemy,ruff --pre-commit=passleak,lint --folder=my-flask-app
   ```

## 🗂️ Project Structure

- **`scaf` CLI**: Main command line interface for scaffolding projects.
- **Frameworks Supported**: React, Vue, Flask.
- **Runtimes and Bundlers**: Supports Bun, Deno, Vite, SWC, Pip, Uv, and Poetry.

## 🤝 Development

To contribute to the project, clone the repository, make your changes, and submit a pull request. You can run the tool in development mode with:

```sh
$ cargo run -- new react --runtime=bun --folder=my-dev-app
```

## 📜 License

This project is licensed under the MIT License.

## 📧 Contact

Author: itsparser, parthasarathy

Email: [itsparser@gmail.com](mailto:itsparser@gmail.com), [parthasarathygopu@gmail.com](mailto:parthasarathygopu@gmail.com)

### Credits
- **ChatGPT** by OpenAI: Assisted in generating parts of the code.
- **v0** by vercel: Assisted in generating parts of the code.
- **Bolt** by stackblitz: Assisted in generating parts of the code.

