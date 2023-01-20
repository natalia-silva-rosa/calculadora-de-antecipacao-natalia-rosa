import React, { createContext, useState, ReactNode } from "react";
import { api } from "../services/api";

export interface IForm {
  amount: number;
  installments: number;
  mdr: number;
  days?: Array<number>;
  [key: number]: any;
}

interface ICalculatorContext {
  onSubmitFormFunction: (data: IForm) => void;
  arrDays: Array<number>;
  setArrDays: React.Dispatch<React.SetStateAction<Array<number>>>;
  arrResults: Array<number>;
  setArrResults: React.Dispatch<React.SetStateAction<Array<number>>>;
}

interface CalculatorProps {
  children: ReactNode;
}

export const CalculatorContext = createContext<ICalculatorContext>(
  {} as ICalculatorContext
);

export const CalculatorProvider = ({ children }: CalculatorProps) => {
  const [arrDays, setArrDays] = useState<Array<number>>([]);
  const [arrResults, setArrResults] = useState<Array<number>>([]);

  const onSubmitFormFunction = async (data: IForm) => {
    if (!data.days) {
      data.days = [1, 15, 30, 90];
    }

    setArrDays(data.days);
    const response = await api.post<IForm>("", data);
    const newArrResults = data.days.map((day, key) => {
      return response.data[day];
    });
    setArrResults(newArrResults);
    setArrDays(data.days);
  };

  return (
    <CalculatorContext.Provider
      value={{
        onSubmitFormFunction,
        arrDays,
        setArrDays,
        arrResults,
        setArrResults,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
