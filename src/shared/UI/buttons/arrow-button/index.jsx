import classes from './index.module.scss';

import ArrowLeft from 'src/shared/img/svg/arrows/arrow-large-left.svg?react';
import ArrowRight from 'src/shared/img/svg/arrows/arrow-large-right.svg?react';

export const ArrowBtn = ({ reverseDirection = false, clickHandler }) => {
  return (
    <button
      className={classes.button}
      onClick={clickHandler}
    >
      <div className={classes['button__img']}>
        {reverseDirection ?
          <ArrowLeft /> :
          <ArrowRight />
        }
      </div>
    </button>
  )
}
