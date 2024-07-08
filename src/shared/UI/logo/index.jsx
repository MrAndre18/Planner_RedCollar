import React from 'react';
import classes from './index.module.scss';

import LogoImg from 'src/shared/img/svg/logo.svg?react';

export const Logo = () => {
  return (
    <div className={classes.logo}>
      <div className={classes['logo__img']}>
        <LogoImg />
      </div>

      <span className={classes['logo__text']}>red collar</span>
    </div>
  )
}
