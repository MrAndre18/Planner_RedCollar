import { MainLayout } from 'src/shared/UI/main-layout';
import './index.scss';
import { Header } from 'src/widgets/header';
import { Calendar } from 'src/widgets/calendar';
import { AppContext } from 'src/shared/context';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import 'overlayscrollbars/overlayscrollbars.css';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import { Authorization } from 'src/widgets/authorization';

const App = () => {
  const
    [choosedDate, setChoosedDate] = useState(dayjs()),
    [events, setEvents] = useState([]),
    [isLoggedIn, setIsLoggedIn] = useState(false),

    // Modals controllers
    [authorizeModalIsOpen, setAuthorizeModalOpen] = useState(false),

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
      },

      // authorization
      auth: {
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn
      },

      // modals
      modals: {
        authorize: {
          isOpen: authorizeModalIsOpen,
          setOpen: setAuthorizeModalOpen
        }
      },
    }}>
      <div className='app'>
        <MainLayout>
          <Header />

          <Calendar />

          <Authorization
            isOpen={authorizeModalIsOpen}
            setOpen={setAuthorizeModalOpen}
          />
        </MainLayout>
      </div>
    </AppContext.Provider>
  )
}

export default App