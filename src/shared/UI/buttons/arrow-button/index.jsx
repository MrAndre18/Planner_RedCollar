import classes from './index.module.scss';

import ArrowLeft from 'src/shared/img/svg/arrows/arrow-large-left.svg?react';
import ArrowRight from 'src/shared/img/svg/arrows/arrow-large-right.svg?react';

export const ArrowBtn = ({ direction = 'right', onClick }) => {
  return (
    <button
      className={classes.button}
      onClick={onClick}
    >
      <div className={classes['button__img']}>
        {direction === 'left' && <ArrowLeft />}
        {direction === 'right' && <ArrowRight />}
      </div>
    </button>
  )
}
