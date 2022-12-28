import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

// @으로 사용하고싶으면 & input 안에 border 끝에 ${props => props.ivalid ? 'red':'#ccc'} 사용하면 사용가능함
// back 그라운드도 동일
const FormControl = styled.div`

  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input{
  border-color: red;
  background-color: #ffd7d7;
}
&.invalid label{
  color: red;
}
`;

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
      <FormControl className={!isValid && 'invalid'}
      // @ invalid={!isValid}
      >
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
