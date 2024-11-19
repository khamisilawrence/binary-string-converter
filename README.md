# Binary-to-String Converter

## Overview

The **Binary-to-String Converter** application is a utility web tool designed to simplify the process of converting binary data to text and vice versa. This tool is tailored for developers, students, and enthusiasts who work with binary data and need a quick, efficient way to encode or decode binary strings. Built with modern technologies like **Next.js**, **TypeScript**, and **TailwindCSS**, it offers a user-friendly interface and responsive design.

## Features

- **String to Binary Conversion**: Convert plain text into binary code.
- **Binary to String Conversion**: Decode binary sequences into human-readable text.
- **Copy to Clipboard**: Quickly copy the results to your clipboard.
- **Responsive Design**: Optimized for use on both mobile and desktop devices.
- **Accessibility**: Includes ARIA labels for improved accessibility.
- **Light and Dark Modes**: Adapts to your system's theme preferences.
- **Interactive Feedback**: Visual and textual feedback when copying results.

## Project Structure

The project follows a modular and component-driven architecture:

- **Pages**: Located under `src/app/`, includes main page components like `page.tsx`.
- **Components**: Reusable UI components like buttons, headers, and text areas are in `src/components/`.
- **Utils**: Conversion logic is modularized in `src/utils/conversion/`.
- **Hooks**: Custom hooks, such as `useMediaQuery`, reside in `src/hooks/`.
- **Constants**: Centralized text content and configuration in `src/constants/`.
- **Assets**: Icons and other static assets are stored in `src/assets/`.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org) 14
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Testing**: [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library)
- **Icons**: Custom SVG components

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18 or newer)
- **npm**, **yarn**, or another package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/khamisilawrence/binary-string-converter.git
   cd binary-string-converter
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application should be accessible at <http://localhost:3000>.

### Running Tests

To execute the test suite:

```bash
npm test
# or
yarn test
```

### Building for Production

To generate a production build:

```bash
npm run build
# or
yarn build
```

Then, start the production server:

```bash
npm start
# or
yarn start
```

## Usage

### Conversion

1. **Input**: Enter text or binary data in the input field.
2. **Select Conversion Type**: Use the dropdown to choose between:
    - **String to Binary**: Convert text to binary data.
    - **Binary to String**: Convert binary data to text.

3. **Convert**: Click the "Convert" button to view the results.
4. **Copy to Clipboard**: Use the copy button to save the output for later use.

### Example

#### String to Binary

- **Input**: `Hello`
- **Output**: `01001000 01100101 01101100 01101100 01101111`

#### Binary to String

- **Input**: `01001000 01100101 01101100 01101100 01101111`
- **Output**: `Hello`

**Note**: The binary data is displayed as a string of hexadecimal pairs for readability.

### Tests

The codebase includes comprehensive unit tests for:

- Conversion logic (`src/utils/conversion/conversion.test.ts`)
- UI components (`src/components/*/*.test.tsx`)
- Custom hooks (`src/hooks/useMediaQuery/useMediaQuery.test.ts`)

To run all tests, execute:

```bash
npm test
```

## Maintainer

Developed and maintained by **[Khamisi Lawrence](https://github.com/khamisilawrence)**.
