
import React from "react";
import { TooltipProvider as RadixTooltipProvider } from "@radix-ui/react-tooltip";

interface TooltipProvidersWrapperProps {
  children: React.ReactNode;
}

export function TooltipProvidersWrapper({ children }: TooltipProvidersWrapperProps) {
  return (
    <RadixTooltipProvider>
      {children}
    </RadixTooltipProvider>
  );
}
