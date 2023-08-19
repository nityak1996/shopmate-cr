import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Shoping Cart`;
  }, [title]);

  return null;
};
