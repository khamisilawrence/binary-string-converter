import { stringToBinary, binaryToString } from "@/utils/conversion/conversion";

describe("stringToBinary", () => {
  it("should convert a string to binary", () => {
    const result = stringToBinary("hello");
    expect(result).toBe("01101000 01100101 01101100 01101100 01101111");
  });

  it("should handle an empty string", () => {
    const result = stringToBinary("");
    expect(result).toBe("");
  });
});

describe("binaryToString", () => {
  it("should convert binary to string", () => {
    const result = binaryToString(
      "01101000 01100101 01101100 01101100 01101111"
    );
    expect(result).toBe("hello");
  });

  it("should handle an empty binary string", () => {
    const result = binaryToString("");
    expect(result).toBeUndefined;
  });
});
