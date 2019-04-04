import React, {useContext} from 'react';
import { FormCtx } from "./Form"

const FormInput = ({ type, name }) =>{

  const [userInfo, setUserInfo] = useContext(FormCtx);
  let inputName = name;

  if (name){
    inputName =name.split('.').reduce((o, i)=>o[i], userInfo);
    //inputName= name.replace('.', "][" )
  }


  // handleSetState(cat, key, val) => {
  //   const category = {...userInfo[cat]};
  //   if (typeof key === 'string') {
  //     category[key] = val;
  //   } else {
  //     key.map((item, index) => {
  //       category[item] = val[index];
  //     });
  //   }
  //  // setUserInfo({[cat]: category});
  // }


  return(
    <div className="form-group">
      <input
        name={name}
        type={type}
        value={inputName}
        onChange={event => {
          event.preventDefault();
          console.log([userInfo])
          setUserInfo({ ...userInfo,  [name] : event.target.value });
          setUserInfo({...userInfo, [name] : event.target.value })
          console.log(userInfo)


        }}
      />
    </div>

  )
};

export default FormInput;
