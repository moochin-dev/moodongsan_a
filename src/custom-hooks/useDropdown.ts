import { useEffect, useRef, useState } from "react";

export const useDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const handleButtonClick = () => {
    if (isDropdownOpen) {
      handleDropdownClose();
    } else {
      handleDropdownOpen();
    }
  };

  useEffect(() => {
    const handleDropdownHide = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        buttonRef.current &&
        !buttonRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        handleDropdownClose();
      }
    };
    document.addEventListener("mousedown", handleDropdownHide);
    return () => {
      document.removeEventListener("mousedown", handleDropdownHide);
    };
  }, []);

  return {
    buttonRef,
    dropdownRef,
    isDropdownOpen,
    handleButtonClick,
    handleDropdownOpen,
    handleDropdownClose,
  };
};
