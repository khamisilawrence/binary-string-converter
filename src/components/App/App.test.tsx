import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

// Mock the navigator.clipboard.writeText function
const mockClipboard = {
  writeText: jest.fn(() => Promise.resolve()),
};
Object.assign(navigator, { clipboard: mockClipboard });

// Mock the useMediaQuery hook
jest.mock("../../hooks/useMediaQuery/useMediaQuery", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("App Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("Binary Converter")).toBeInTheDocument();
  });

  it("converts string to binary and copies to clipboard", async () => {
    render(<App />);

    const input = screen.getByLabelText("Input (max 280 characters):");
    const convertButton = screen.getByText("Convert");
    const copyButton = screen.getByTestId("copy-button-testid");

    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.click(convertButton);

    const output = screen.getByLabelText("Output:");
    expect(output).toHaveValue("01001000 01100101 01101100 01101100 01101111");

    await act(async () => {
      fireEvent.click(copyButton);
    });

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        "01001000 01100101 01101100 01101100 01101111"
      );
    });
  });

  it("converts binary to string and copies to clipboard", async () => {
    render(<App />);

    const input = screen.getByLabelText("Input (max 280 characters):");
    const conversionSelect = screen.getByLabelText("Conversion Type:");
    const convertButton = screen.getByText("Convert");
    const copyButton = screen.getByTestId("copy-button-testid");

    fireEvent.change(conversionSelect, { target: { value: "binaryToString" } });
    fireEvent.change(input, {
      target: { value: "01001000 01100101 01101100 01101100 01101111" },
    });
    fireEvent.click(convertButton);

    const output = screen.getByLabelText("Output:");
    expect(output).toHaveValue("Hello");

    await act(async () => {
      fireEvent.click(copyButton);
    });

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith("Hello");
    });
  });

  it('displays "Copied!" message on small screens after copying', async () => {
    const useMediaQuery =
      require("../../hooks/useMediaQuery/useMediaQuery").default;
    useMediaQuery.mockReturnValue(true); // Simulate small screen

    render(<App />);

    const input = screen.getByLabelText("Input (max 280 characters):");
    const convertButton = screen.getByText("Convert");
    const copyButton = screen.getByTestId("copy-button-testid");

    fireEvent.change(input, { target: { value: "Test" } });
    fireEvent.click(convertButton);

    await act(async () => {
      fireEvent.click(copyButton);
    });

    await screen.findByText("Copied!");

    // Wait for the "Copied!" message to disappear
    await waitFor(
      () => {
        expect(screen.queryByText("Copied!")).not.toBeInTheDocument();
      },
      { timeout: 2500 }
    );
  });

  it("displays icon on large screens after copying", async () => {
    const useMediaQuery =
      require("../../hooks/useMediaQuery/useMediaQuery").default;
    useMediaQuery.mockReturnValue(false); // Simulate large screen

    render(<App />);

    const input = screen.getByLabelText("Input (max 280 characters):");
    const convertButton = screen.getByText("Convert");
    const copyButton = screen.getByTestId("copy-button-testid");

    fireEvent.change(input, { target: { value: "Test" } });
    fireEvent.click(convertButton);

    await act(async () => {
      fireEvent.click(copyButton);
    });

    await screen.findByLabelText("Check Icon");

    // Wait for the check icon to disappear
    await waitFor(
      () => {
        expect(screen.queryByLabelText("Check Icon")).not.toBeInTheDocument();
      },
      { timeout: 2500 }
    );
  });
});
