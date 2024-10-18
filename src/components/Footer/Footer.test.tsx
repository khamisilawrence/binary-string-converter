import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer/Footer";

describe("Footer component", () => {
  it("renders the correct footer content", () => {
    render(<Footer />);
    expect(screen.getByText("©")).toBeInTheDocument();
    expect(
      screen.getByText(new Date().getFullYear().toString())
    ).toBeInTheDocument();
    expect(
      screen.getByText("Maintained by Khamisi Lawrence")
    ).toBeInTheDocument();
  });
});
