import * as React from 'react';
import {Form} from '@molecules';
import {Input} from '_types';
import {FirebaseAuthContext} from 'utils/context';

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const {signInEmailPass} = React.useContext(FirebaseAuthContext);
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

  const onSubmit = async () => {
    console.log('submit button pressed');
    try {
      await signInEmailPass(formValues.username, formValues.password);
      console.log('The user was signed in');
    } catch (err) {
      console.error(err);
    }
  };
  const formProps = {
    inputs,
    name: 'login',
    buttonText: 'login',
    onSubmitPress: onSubmit,
  };
  return <Form {...formProps} />;
};
