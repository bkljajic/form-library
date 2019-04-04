import React, {Component, createContext, useState} from 'react';

export const FormCtx = createContext([{}, () => {}]);

const Form = props => {

  const [userInfo, setUserInfo] = useState(props.initialValues);
  console.log(props);

  return (
    <FormCtx.Provider value={[userInfo, setUserInfo]}>
      <form onSubmit={e => e.preventDefault() || console.log(JSON.stringify(userInfo))}>
        {props.children}
      </form>
    </FormCtx.Provider>
  );
};

export default Form
