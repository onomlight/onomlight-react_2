import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    
    if(event.target.value.trim().length>0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(
      enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
      // 공백일때 추가하지않도록 우선적으로 작동시킴 
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{
          //props 값을 동적으로 바꿈 
          color:!isValid?'red':'black'
          }}>Course Goal</label>
        <input style={{borderColor: !isValid?'red':'black', 
         background : !isValid?'salmon':'transparent' }} 
         type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
