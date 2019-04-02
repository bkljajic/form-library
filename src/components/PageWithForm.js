import React, { useState } from 'react';
import Form from './Form';
import FormInput from './FormInput';

export const PageWithForm = () => {
  const [ userInfo, setUserInfo ] = useState({
    email: 'example@alea.com',
    age: 30,
    name: 'John Doe',
    phone: {
      ext: '00387',
      number: '65/123-456'
    }
  });

  return (
    <div>
        <Form initialValues={userInfo} onSubmit={setUserInfo}>
          <FormInput type="email" required name="email" placeholder="your@email.com" />
          <FormInput type="number" name="age" />
          <FormInput type="text" required name="name" />
          <FormInput type="text" name="phone.ext" />
          <FormInput type="text" name="phone.number" />
          <FormInput type="submit" value="Submit" />
        </Form>
    </div>
  );
};

export default PageWithForm;