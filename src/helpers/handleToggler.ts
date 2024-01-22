import { Dispatch, SetStateAction } from "react";

export const handleToggler = (
  isState: boolean,
  setIsState: Dispatch<SetStateAction<boolean>>
) => {
  setIsState(!isState);
};
