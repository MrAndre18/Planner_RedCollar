import React from 'react';
import classes from './index.module.scss';
import { Logo } from 'src/shared/UI/logo';
import { ActionBtn } from 'src/shared/UI/buttons';
import { MonthSwitcher } from 'src/features/switch-month';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes['header__title']}>
        <Logo />
        <h1 className={classes['header__title-text']}>planner <span>event</span></h1>
      </div>

      <div className={classes['header__controls']}>
        <MonthSwitcher />

        <ActionBtn>
          Вход
        </ActionBtn>
      </div>
    </header>
  )
}
