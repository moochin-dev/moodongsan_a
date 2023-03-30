import React from "react";

export interface INavBarButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  isDotted?: boolean;
}
