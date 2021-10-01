import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().required().min(14, "phone must be at least 11 digits"),
});

export default schema;