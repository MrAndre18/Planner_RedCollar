import React from 'react';
import classes from './index.module.scss';

export const MainLayout = ({ children }) => {
  return (
    <main className={classes.main}>
      {children}
    </main>
  )
}
