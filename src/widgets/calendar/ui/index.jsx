import './index.scss';
import { Calendar as CalendarAntd } from 'antd';
import '../lib';
import { useContext } from 'react';
import { AppContext } from 'src/shared/context';
import { cellRender } from './cell';
import { getEventsForChoosedMonth } from 'src/shared/API/events';

export const Calendar = () => {
  const
    { choosedDate } = useContext(AppContext),
    [events, eventsIsLoading, eventsError] = getEventsForChoosedMonth({
      populate: '*',
    })

  return (
    <section id='calendar'>
      <CalendarAntd
        className='calendar'
        value={choosedDate.value}
        headerRender={() => null}
        fullCellRender={(current, info) => cellRender(current, info, events)}
        disabledDate={() => { return true }}
        locale={{ "lang": { "locale": 'ru_RU' } }}
      />
    </section>
  )
}
