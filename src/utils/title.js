import { useEffect } from "react";

export const changeTitle = (newTitle) => {
  return useEffect(() => {
    document.title = newTitle;

    return () => {
      document.title = "Daniel Nakolah";
    };
  }, []);
};
