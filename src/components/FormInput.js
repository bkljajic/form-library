import React, {useContext} from 'react';
import { FormCtx } from "./Form"

function FormInput ({ type, name, value, ...rest }) {

  const [userInfo, setUserInfo] = useContext(FormCtx);

  return(
    <div className="form-group">
      <input
        name={name}
        type={type}
        value={value}
        onChange={event => {
          event.preventDefault();
          setUserInfo({ ...userInfo, [name]: event.target.value });
        }}
        {...rest}
      />
    </div>

  )
}

export default FormInput;

// const Input = ({name, value}) => (
//   <FormConsumer>
//     {({values, setValue}) => {
//       return (
//         <input name={name}
//                value={values[name] || ""}
//                onChange={(event) =>  {
//                  event.preventDefault();
//                  setValue(name, event.target.value);
//                }}/>
//       );
//     }}
//   </FormConsumer>
// );
//
//
// export default Input;

// const Input = (props) => {
//
//   return (
//     <div className="form-group">
//     <label htmlFor={props.name} className="form-label">{props.title}</label>
//       <input
//         id={props.name}
//         name={props.name}
//         type={props.type}
//         value={props.value}
//         onChange={props.handleChange}
//         placeholder={props.placeholder}
//       />
//     </div>
//   )
// }