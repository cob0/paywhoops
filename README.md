# Paywhoops!

Paywhoops! is a Firefox extension that removes paywalls, granting users free access to online content without
restrictions. This tool is designed to enhance your browsing experience by allowing you to view articles, videos, and
other media that are typically behind paywalls.

## Development Instructions

To get started with developing Paywhoops!, follow the steps below:

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Rollup](https://rollupjs.org/)

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/cob0/paywhoops.git
   cd paywhoops
   ```

2. **Install dependencies:** Run the following command to install the necessary development dependencies:

   ```bash
   npm install
   ```

3. **Development Mode:** To start the development server and watch for changes, use the following command:

   ```bash
   npm run dev
   ```
   This command will build the project and automatically update the output whenever you make changes to the source
   files.

4. **Build for Production:** To create a production build of the extension, run:

   ```bash
   npm run build
   ```
   This will generate the optimized files in the dist directory.

## Contributing

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

## License

This project is licensed under the [AGPL-3.0-or-later](https://www.gnu.org/licenses/agpl-3.0.html).

## Author

- cob0 <[cob0@tutanota.com](mailto:cob0@tutanota.com)>
