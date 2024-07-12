import classes from './index.module.scss';

import InfoIcon from 'src/shared/img/svg/alert/info.svg?react';
import ErrorIcon from 'src/shared/img/svg/alert/error.svg?react';

export const Alert = ({
  type = 'info', // 'info' | 'error'
  children,
  maxWidth = 'none',
  style = {}
}) => {
  return (
    <div className={classes.alert} style={{
      maxWidth: maxWidth,
      ...style
    }}>
      <div className={classes['alert__icon']}>
        {type === 'error' ?
          <ErrorIcon /> :
          <InfoIcon />
        }
      </div>

      <p className={classes['alert__text']}>{children}</p>
    </div>
  )
}
