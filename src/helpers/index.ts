import { Dispatch, SetStateAction } from "react";

export const handleToggler = (
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
) => {
  setIsOpen(!isOpen);
};
