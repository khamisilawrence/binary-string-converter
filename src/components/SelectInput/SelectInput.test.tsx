import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectInput from "@/components/SelectInput/SelectInput";

describe("SelectInput component", () => {
  it("renders options correctly", () => {
    render(
      <SelectInput
        elementTitle="Conversion Type"
        elementValue="stringToBinary"
        identifier="conversion-type"
        labelText="Conversion Type"
        onValueChange={() => {}}
        primaryOptionValue="stringToBinary"
        primaryOptionLabel="String to Binary"
        secondaryOptionValue="binaryToString"
        secondaryOptionLabel="Binary to String"
      />
    );

    expect(screen.getByLabelText("Conversion Type")).toBeInTheDocument();
    expect(screen.getByText("String to Binary")).toBeInTheDocument();
    expect(screen.getByText("Binary to String")).toBeInTheDocument();
  });

  it("calls onValueChange when selection changes", () => {
    const handleChange = jest.fn();
    render(
      <SelectInput
        elementTitle="Conversion Type"
        elementValue="stringToBinary"
        identifier="conversion-type"
        labelText="Conversion Type"
        onValueChange={handleChange}
        primaryOptionValue="stringToBinary"
        primaryOptionLabel="String to Binary"
        secondaryOptionValue="binaryToString"
        secondaryOptionLabel="Binary to String"
      />
    );

    fireEvent.change(screen.getByTitle("Conversion Type"), {
      target: { value: "binaryToString" },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
