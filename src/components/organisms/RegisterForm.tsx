import React from 'react';
import {Form} from '@molecules';
import {Input} from '_types';
import {registerWithEmailPass} from 'utils/Auth';
import {FirebaseAuthContext} from 'utils/context';

interface RegisterFormValues {
  email: string;
  password: string;
  username: string;
}

export const RegisterForm = () => {
  const [formValues, updateFormValues] = React.useState<RegisterFormValues>({
    email: '',
    username: '',
    password: '',
  });
  const AuthContext = React.useContext(FirebaseAuthContext);
  const inputs: Input[] = [
    {
      label: 'email address',
      type: 'email',
      onChangeInput: (text: string) => onChangeHandler('email', text),
    },
    {
      label: 'username',
      type: 'text',
      onChangeInput: (text: string) => onChangeHandler('username', text),
    },
    {
      label: 'password',
      type: 'password',
      onChangeInput: (text: string) => onChangeHandler('password', text),
    },
  ];

  const onChangeHandler = (id: string, newValue: string) => {
    // update fields based off id
    // use the hook to update the values
    updateFormValues({...formValues, [id]: newValue});
  };

  const onSubmit = () => {
    AuthContext?.registerEmailPass(formValues.email, formValues.password);
  };

  const formProps = {
    inputs,
    name: 'register',
    buttonText: 'register',
    onSubmitPress: onSubmit,
  };
  return <Form {...formProps} />;
};
