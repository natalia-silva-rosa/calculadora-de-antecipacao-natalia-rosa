import { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import { StyledAside } from "./styles";

export default function Aside() {
  const { arrDays, arrResults } = useContext(CalculatorContext);

  return (
    <StyledAside>
      <p className="txt">VOCÊ RECEBERÁ</p>
      <hr />
      <div className="info">
        <div className="days_div">
          {arrDays.map((day) => {
            if (day === 1) {
              return <p className="days_txt">Amanhã: </p>;
            } else {
              return <p className="days_txt">Em {day} dias: </p>;
            }
          })}
        </div>

        <div className="results_div">
          {arrResults.map((result) => {
            return <p className="results_txt">R$ {result},00</p>;
          })}
        </div>
      </div>
    </StyledAside>
  );
}
