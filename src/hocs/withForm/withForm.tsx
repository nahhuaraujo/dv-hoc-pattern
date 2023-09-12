import { useState } from 'react';

const withForm = (Component: React.ComponentType<any>, initialState: any) => {
  const EnhancedComponent = (props: any) => {
    const [formValues, setFormValues] = useState(initialState);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formValues);
    };

    return <Component {...props} formValues={formValues} changeHandler={changeHandler} submitHandler={submitHandler} />;
  };

  return EnhancedComponent;
};

export default withForm;
