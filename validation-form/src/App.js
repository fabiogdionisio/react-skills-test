import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import formSchema from './validations/formSchema';

import { postForm } from './services/apiService';
import MaskedInput from './components/MaskedInput';

export default function App() {
  // In a productive situation, I use a mix of React Hook Forms + Yup for 
  // form state managment and schema validation. I prefer React Hook Form over
  // other libraries such as Formik because of performance, since React
  // Hook Form uses uncontrolled forms. I also use some libraries to apply mask
  // to inputs.

  const defaultValues = {
    name: '',
    email: '',
    phone: '',
  }

  const { 
    handleSubmit, 
    formState: { errors, isValid, isSubmitted }, 
    control,
    setError  
  } = useForm({ mode: 'onChange', defaultValues, resolver: yupResolver(formSchema) });
  
  // const onSubmit = data => console.log(data);
  const onSubmit = data => { 
    postForm(data).then().catch((error) => {
      const { status, data } = error.response;

      if (status === 400) {
        setError(data.field, {
          type: 'invalid',
          message: data.message
        })
      }
    });
  }

  return <form style={{ padding: 30 }} onSubmit={handleSubmit(onSubmit)}>
    <div>
      <FormControl>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} id="name" error={errors.name ? true : false} variant="outlined" label="Name" />}
        />
        { errors.name ? 
          <FormHelperText error={true}>{errors.name.message}</FormHelperText> : 
          <FormHelperText error={false}>Full name please.</FormHelperText> }
      </FormControl>  
    </div>
    <div>
      <FormControl>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} id="email" error={errors.email ? true : false} variant="outlined" label="Email" />}
        />
        { errors.email ? 
          <FormHelperText error={true}>{errors.email.message}</FormHelperText> : 
          <FormHelperText error={false}>We'll never share your email.</FormHelperText> }
      </FormControl>
    </div>
    <div>
      <FormControl>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} id="phone" error={errors.phone ? true : false} variant="outlined" label="Phone Number" type="tel" InputProps={{  
            inputComponent: MaskedInput,
          }} />}
        />
        { errors.phone ? 
          <FormHelperText error={true}>{errors.phone.message}</FormHelperText> : 
          <FormHelperText error={false}>Phone Number.</FormHelperText>}
      </FormControl>
    </div>
    <div style={{ marginTop: 30 }}>
      <Button variant="contained" type="submit" disabled={!isValid && isSubmitted}>Submit</Button>
    </div>
  </form>;
}