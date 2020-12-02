import * as React from 'react';
import {Form} from '@molecules';
import {registerWithEmailPass} from 'utils';

interface RegisterFormValues {
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const [formValues, updateFormValues] = React.useState<RegisterFormValues>({
    email: '',
    password: '',
  });
  const fields = [
    {
      label: 'email',
      onChangeInput: (text: string) => onChangeHandler('email', text),
    },
    {
      label: 'password',
      onChangeInput: (text: string) => onChangeHandler('password', text),
    },
  ];

  const onChangeHandler = (id: string, newValue: string) => {
    // update fields based off id
    // use the hook to update the values
    updateFormValues({...formValues, [id]: newValue});
  };

  const onSubmit = () =>
    registerWithEmailPass(formValues.email, formValues.password);
  const formProps = {
    fields,
    name: 'register',
    buttonText: 'register',
    onSubmitPress: onSubmit,
  };
  return <Form {...formProps} />;
};
