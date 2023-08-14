import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  cost: yup.number().integer().required(),
  buying_quantity: yup.number().integer().required(),
  price_per_unit: yup.number().integer().required(),
  discount: yup.number().integer().nullable(),
  total_price: yup.number().integer().required(),
  unit_sent: yup.number().integer().required(),
  location: yup.string().required(),
  organization_id: yup.string().nullable(),
});
