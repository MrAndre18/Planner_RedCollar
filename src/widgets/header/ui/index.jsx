import React, { useContext } from 'react';
import classes from './index.module.scss';
import { Logo } from 'src/shared/UI/logo';
import { ActionBtn } from 'src/shared/UI/buttons';
import { MonthSwitcher } from 'src/features/switch-month';
import { AppContext } from 'src/shared/context';

export const Header = () => {
  const { modals } = useContext(AppContext)

  return (
    <header className={classes.header}>
      <div className={classes['header__title']}>
        <Logo />
        <h1 className={classes['header__title-text']}>planner <span>event</span></h1>
      </div>

      <div className={classes['header__controls']}>
        <MonthSwitcher />

        <ActionBtn onClick={() => {
          modals.authorize.setOpen(true)
        }}>
          Вход
        </ActionBtn>
      </div>
    </header>
  )
}
