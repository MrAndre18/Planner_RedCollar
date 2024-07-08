import { MainLayout } from 'src/shared/UI/main-layout';
import './index.scss';
import { Header } from 'src/widgets/header';
import { Calendar } from 'src/widgets/calendar';
import { AppContext } from 'src/shared/context';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import 'overlayscrollbars/overlayscrollbars.css';
import { useOverlayScrollbars } from 'overlayscrollbars-react';

const App = () => {
  const
    [choosedDate, setChoosedDate] = useState(dayjs()),
    [events, setEvents] = useState([]),

    // Scroll
    scrollOptions = {
      overflow: {
        x: 'hidden',
      },
      scrollbars: {
        autoHide: 'scroll',
        autoHideDelay: 2000
      },
    },
    [scrollInitialize, scrollInstance] = useOverlayScrollbars({
      options: scrollOptions,
      events: {},
      defer: true
    })

  useEffect(() => {
    scrollInitialize(document.body)
  }, [scrollInitialize])

  return (
    <AppContext.Provider value={{
      // date
      choosedDate: {
        value: choosedDate,
        setValue: setChoosedDate
      },
      today: dayjs(),

      // events
      events: {
        list: events,
        setList: setEvents
      }
    }}>
      <div className='app'>
        <MainLayout>
          <Header />

          <Calendar />
        </MainLayout>
      </div>
    </AppContext.Provider>
  )
}

export default App