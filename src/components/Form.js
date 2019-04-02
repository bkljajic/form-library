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


  // class Form extends Component {
  //   constructor(props){
  //     super(props)
  //     this.state = {
  //       values: props.defaultValues
  //     }
  //   }
  //
  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //
  //     console.log(this.props);
  //   }
  //
  //
  //
  //   render(){
  //     return (
  //       <form onSubmit={this.handleSubmit}>
  //         {this.props.children}
  //       </form>
  //     );
  //   }
  // }

export default Form


// import React, {Component, createContext} from 'react';
// import FormInput from './FormInput';
// //
// // const ValuesContext = createContext({});
// // const SetValueContext = createContext(() => {});
//
// export const FormCtx = createContext({});
//
// function Form(props) {
//   const[userInfo, setUserInfo] = useState({});
//
//   handleSubmit = (e) => {
//     e.preventDefault();
//
//     console.log(this.props);
//   }
//
//   return (
//     <CountCtx.Provider value={count}>
//       <form onSubmit={this.handleSubmit}>
//         {this.props.children}
//       </form>
//     </CountCtx.Provider>
//   );
//
//
//
//   export default Form
