import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false); // Tracks whether current viewport matches media query

  // Handle changes in viewport size and update `matches` state accordingly
  useEffect(() => {
    const media = window.matchMedia(query); // Create a MediaQueryList object based on the provided query

    // Update the state if the matches state is different from the media query result
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Define a listener function to update matches state when the viewport size changes
    const listener = () => setMatches(media.matches);

    // Attach the listener to the window resize event
    window.addEventListener("resize", listener);

    // Clean up the listener when the component unmounts or when the query or matches state changes
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches; // Return the current matches state, indicating whether the viewport matches the provided media query
};

export default useMediaQuery;
