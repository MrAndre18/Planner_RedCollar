import { EventBadge } from 'src/shared/UI/buttons';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from 'src/shared/context';
import { Modal } from 'src/shared/UI/modal';
import { Event } from 'src/entities/event';
import classes from './index.module.scss';

export const ShowEvent = ({ event }) => {
  const
    { today } = useContext(AppContext),
    [open, setOpen] = useState(false),
    [isPast, setIsPast] = useState(true)

  useEffect(() => {
    if (event.dateEnd) {
      if (event.dateEnd > today.toJSON())
        setIsPast(false)
    } else {
      if (event.dateStart > today.toJSON())
        setIsPast(false)
    }
  }, [])

  const Footer = () => {
    return (
      <span className={classes['footer-text']}>
        <button className={classes['footer-text__btn']}>Войдите</button>, чтобы присоединиться к событию
      </span>
    )
  }

  return (
    <>
      <EventBadge
        title={event.title}
        clickHandler={() => { setOpen(true) }}
        isPast={isPast}
      />

      <Modal
        title={event.title}
        footer={!isPast && <Footer />}
        open={open}
        closeModal={() => { setOpen(false) }}
        width={1075}
        style={{
          body: {
            padding: '80px 64px'
          },
          header: {
            marginBottom: isPast ? 16 : 40
          },
          footer: {
            marginTop: 64
          }
        }}
      >
        <Event event={event} isPast={isPast} />
      </Modal>
    </>
  )
}
