import * as React from 'react';
import {Form} from '@molecules';
import {signInWithEmailPass} from 'utils';
import {Input} from '_types';

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const [formValues, updateFormValues] = React.useState<LoginFormValues>({
    username: '',
    password: '',
  });
  const inputs: Input[] = [
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

  const onSubmit = () =>
    signInWithEmailPass(formValues.username, formValues.password);
  const formProps = {
    inputs,
    name: 'login',
    buttonText: 'login',
    onSubmitPress: onSubmit,
  };
  return <Form {...formProps} />;
};
