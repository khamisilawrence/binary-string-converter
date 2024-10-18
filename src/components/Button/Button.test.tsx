import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/Button/Button";

describe("Button component", () => {
  it("renders with default text", () => {
    render(<Button onClick={() => {}} />);
    expect(screen.getByText("Click Me!")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click Me!"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when the disabled prop is true", () => {
    render(<Button onClick={() => {}} disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
