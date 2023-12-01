import classes from './MyInput.module.css'
import React from 'react';

const MyInput = React.forwardRef((props) => {
  return (
      <input className={classes.myInput} {...props}/>
  );
});

export default MyInput;
