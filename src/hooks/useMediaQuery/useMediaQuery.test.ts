import { renderHook } from "@testing-library/react";
import useMediaQuery from "@/hooks/useMediaQuery/useMediaQuery";

describe("useMediaQuery", () => {
  beforeAll(() => {
    global.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(min-width: 768px)",
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  });

  it("should return true when the media query matches", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(true);
  });

  it("should return false when the media query does not match", () => {
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));
    expect(result.current).toBe(false);
  });
});
