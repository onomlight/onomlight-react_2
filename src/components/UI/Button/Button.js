
import React from "react";
import styles from './Button.module.css'
// import styled from 'styled-components';
//이미 리액트는 css 묘듈을 지원하기로 되어있어서 별도 지원요구가 필요없음! 
// const Button = styled.button`
//   width:100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width : auto;
//   }

// .&:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// `;
// 버튼은 스타일 매개체여서 ^ 메소드로 접근가능함 

const Button = props => {
  return (
    <button type={props.type} 
    className={styles.button}
    //^동적값 사용 
    // styled 컴포넌트가 추가한것과 동일한 클래스X "컴포넌트이름_클래스 이름 _고유한 해시값"
    onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
