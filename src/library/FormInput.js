import React, {useContext} from 'react';
import { FormCtx } from "./Form"
import _ from 'lodash';

const FormInput = ({ type, name }) => {

  const [userInfo, setUserInfo] = useContext(FormCtx);
  const displayValue = _.get(userInfo, name);

  function onChangeUpdate(initalState, key, value){
    let stateClone = _.cloneDeep(initalState);
    _.set(stateClone,key, value);
    setUserInfo({...userInfo, ...stateClone});

  }

  return(
    <div className="form-group">
      <input
        name={name}
        type={type}
        value={displayValue}
        onChange={e => {
          e.preventDefault();
          onChangeUpdate(userInfo, name, e.target.value)
        }}
      />
    </div>

  )
};

export default FormInput;
