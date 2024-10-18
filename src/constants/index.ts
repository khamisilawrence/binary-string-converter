export const currentYear = new Date().getFullYear();

export const headerTextContent = "Binary Converter";

export const selectTextContent = {
  selectHeader: "Conversion Type:",
  options: {
    primary: {
      caption: "String to Binary",
      value: "stringToBinary",
    },
    secondary: {
      caption: "Binary to String",
      value: "binaryToString",
    },
  },
};

export const placeholderTextContent = {
  inputPlaceholder: "Type input here...",
  outputPlaceholder: "Output shows here...",
};

export const labelTextContent = {
  inputLabel: "Input (max 280 characters):",
  outputLabel: "Output:",
};

export const buttonTextContent = {
  convert: {
    id: "convert",
    caption: "Convert",
    testid: "convert-button-testid",
  },
  copy: {
    id: "copy",
    caption: {
      copyFalse: "Copy to clipboard",
      copyTrue: "Copied!",
    },
    testid: "copy-button-testid",
  },
};

export const footerTextContent = {
  footerSymbol: "©",
  footerTimestamp: currentYear,
  footerPrefix: "Maintained by",
  footerSignature: "Khamisi Lawrence",
};
