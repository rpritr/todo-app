# Todo App

A clean and responsive task-management application based on the [Todo App design from Figma Community](https://www.figma.com/community/file/1350344600031523800).

The application helps users organize daily tasks, track progress, and manage completed activities through a simple and intuitive interface.

## Features

- Create new tasks
- Mark tasks as completed
- Delete tasks
- View active and completed tasks
- Responsive layout for desktop and mobile devices

## Design

The user interface is based on the following Figma Community design:

[View the Todo App design in Figma](https://www.figma.com/community/file/1350344600031523800)

## Tech Stack

- React
- Vite
- CSS

## Getting Started

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/) version 18 or newer
- npm, yarn, or pnpm

### Installation

Clone the repository:

```bash
git clone https://github.com/rpritr/todo-app
cd todo-app
```

Install the dependencies:

```bash
npm install
```

In one terminal, start the local task API:

```bash
npx json-server db.json
```

In a second terminal, start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

The app uses the local JSON Server at `http://localhost:3000` for task data.
Task titles are not sent to the former third-party JSONSilo endpoint. A
production deployment needs its own secured API; do not put private API keys in
`VITE_*` browser environment variables.

```bash
npm run dev
```

Starts the application in development mode.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run preview
```

Runs the production build locally.

```bash
npm run lint
```

Checks the source code for linting issues.

## License

The operative license is VBL 10.3.0; read [`LICENSE`](LICENSE) and its
file-by-file [`LICENSE-MANIFEST`](LICENSE-MANIFEST) before using, copying, or
distributing covered material. The manifest currently identifies the VBL
contributor and permission records only; it does not identify the inherited
todo-app implementation or third-party material as covered by VBL.

VBL 10.3.0 is a custom license and is not an SPDX-approved open-source license.
The `package.json` license field points to the local text; it does not express
an OSI-approved SPDX identifier. A license can grant only rights held by its
licensor: third-party packages, logos, and design assets are not relicensed by
this project and remain subject to their respective terms. The browser bundle's
third-party licenses are included in
[`public/THIRD-PARTY-NOTICES.txt`](public/THIRD-PARTY-NOTICES.txt), which is
copied into production builds. Other dependencies, including the separately
run JSON server and development tools, remain subject to their own package
terms. The Figma Community design linked above also has its own source terms.

## Credits

The original todo-app implementation is attributed to `rpritr` in the Git
history. The VBL text and its copyright notice are reproduced in `LICENSE`.
