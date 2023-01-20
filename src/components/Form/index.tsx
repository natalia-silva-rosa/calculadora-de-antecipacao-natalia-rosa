import { StyledForm } from "./styles";
import { formSchema } from "../../validators/formSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { CalculatorContext, IForm } from "../../contexts/CalculatorContext";

export default function Form() {
  const { onSubmitFormFunction } = useContext(CalculatorContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ resolver: yupResolver(formSchema) });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitFormFunction)}>
      <h2>Simule sua Antecipação</h2>

      <div className="form_section">
        <label
          htmlFor="amount"
          className={errors.amount ? "err_label" : "form_label"}
        >
          Informe o valor da venda *
        </label>
        <input type="text" id="amount" {...register("amount")} />
      </div>

      <div className="form_section">
        <label
          htmlFor="installments"
          className={errors.installments ? "err_label" : "form_label"}
        >
          Em quantas parcelas *
        </label>
        <input type="text" id="installments" {...register("installments")} />
        <span>Máximo de 12 parcelas</span>
      </div>

      <div className="form_section">
        <label
          htmlFor="amount"
          className={errors.mdr ? "err_label" : "form_label"}
        >
          Informe o percentual de mdr *
        </label>
        <input type="text" id="mdr" {...register("mdr")} />
      </div>

      <div className="form_section">
        <label htmlFor="days" className="form_label">
          Informe os períodos de recebimento
        </label>
        <input type="text" id="days" {...register("days")} />
      </div>

      <input type="submit" value="calcular" className="btn_calculate" />
    </StyledForm>
  );
}
