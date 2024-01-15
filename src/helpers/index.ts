import { Dispatch, SetStateAction } from "react";

// Boolean State Changes
export const handleToggler = (
  isState: boolean,
  setIsState: Dispatch<SetStateAction<boolean>>
) => {
  setIsState(!isState);
};
