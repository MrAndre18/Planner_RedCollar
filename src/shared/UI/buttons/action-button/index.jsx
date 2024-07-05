import React from 'react';
import classes from './index.module.scss';

export const ActionBtn = ({
  children,
  secondary = false,
  disabled = false,
  clickHandler
}) => {
  return (
    <button
      className={`${classes.button} ${secondary ?
        classes['button--outlined'] :
        classes['button--colored']}`}
      disabled={disabled}
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}
