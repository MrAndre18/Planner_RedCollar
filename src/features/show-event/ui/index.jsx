import { EventBadge } from 'src/shared/UI/buttons';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from 'src/shared/context';
import { Modal } from 'src/shared/UI/modal';
import { EventContent } from './event';

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

  return (
    <>
      <EventBadge
        title={event.title}
        clickHandler={() => { setOpen(true) }}
        isPast={isPast}
      />

      <Modal
        open={open}
        closeModal={() => { setOpen(false) }}
        size='lg'
        title={event.title}
      >
        <EventContent event={event} />
      </Modal>
    </>
  )
}
