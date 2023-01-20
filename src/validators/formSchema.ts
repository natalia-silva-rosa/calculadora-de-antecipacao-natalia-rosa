import * as yup from "yup";

export const formSchema = yup.object().shape({
  amount: yup.number().required(),
  installments: yup.number().required().max(12),
  mdr: yup.number().required(),
  days: yup.array().optional().nullable(),
});
