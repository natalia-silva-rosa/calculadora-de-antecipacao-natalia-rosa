import { ReactNode } from "react";
import { CalculatorProvider } from "./CalculatorContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <CalculatorProvider>{children}</CalculatorProvider>;
};
