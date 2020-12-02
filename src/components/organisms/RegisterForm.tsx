import * as React from 'react';
import {Form} from '@molecules';

export const RegisterForm = () => {
  const [formValues, updateFormValues] = React.useState({});
  const fields = [
    {
      label: 'name',
      onChangeInput: (text: string) => onChangeHandler('name', text),
    },
    {
      label: 'password',
      onChangeInput: (text: string) => onChangeHandler('password', text),
    },
  ];

  const onChangeHandler = (id: string, newValue: string) => {
    // update fields based off id
    // use the hook to update the values
    console.log(id);
    updateFormValues({...formValues, [id]: newValue});
  };

  const onSubmit = () => console.log('form values: ', formValues);
  const formProps = {
    fields,
    name: 'register',
    buttonText: 'register',
    onSubmitPress: onSubmit,
  };
  return <Form {...formProps} />;
};
