import React, { useContext } from 'react';
import classes from './index.module.scss';
import { ArrowBtn } from 'src/shared/UI/buttons';
import { AppContext } from 'src/shared/context';


export const MonthSwitcher = () => {
  const
    { choosedDate, today } = useContext(AppContext)

  return (
    <div className={classes['month-switcher']}>
      <h2 className={classes['month-switcher__title']}>
        {choosedDate.value.format(`${choosedDate.value.year() === today.year() ? 'MMMM' : 'MMMM YYYY'}`)}
      </h2>

      <div className={classes['month-switcher__controls']}>
        <ArrowBtn
          direction='left'
          onClick={() => {
            choosedDate.setValue(choosedDate.value.subtract(1, 'month'))
          }}
        />

        <ArrowBtn
          onClick={() => {
            choosedDate.setValue(choosedDate.value.add(1, 'month'))
          }}
        />
      </div>
    </div>
  )
}
