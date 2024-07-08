import './index.scss';
import { Calendar as CalendarAntd } from 'antd';
import '../lib';
import { useContext } from 'react';
import { AppContext } from 'src/shared/context';
import { cellRender } from './cell';

export const Calendar = () => {
  const { choosedDate } = useContext(AppContext)

  return (
    <section id='calendar'>
      <CalendarAntd
        className='calendar'
        value={choosedDate.value}
        headerRender={() => null}
        fullCellRender={cellRender}
        disabledDate={() => { return true }}
        locale={{ "lang": { "locale": 'ru_RU' } }}
      />
    </section>
  )
}
