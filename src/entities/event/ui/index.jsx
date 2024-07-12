import dayjs from 'dayjs';
import classes from './index.module.scss';
import { Participants } from './participants';
import { backendBaseUrl } from 'src/shared/API/config';
import { ImageSlider } from 'src/shared/UI/image-slider';
import { useRef } from 'react';
import { ArrowBtn } from 'src/shared/UI/buttons';
import { Alert } from 'src/shared/UI/alert';

export const Event = ({ event, isPast }) => {
  const sliderRef = useRef(null)

  return (
    <section className={classes.event}>
      {isPast &&
        <Alert
          style={{
            margin: '0 auto 24px'
          }}
        >Мероприятие уже прошло</Alert>
      }

      <article className={classes['event__desc']}>
        <div
          className={`${classes['event__info']}${isPast ? ' ' + classes['event__info--past'] : ''}`}>
          <div className={classes['event__info-start']}>
            <span className={classes['event__info-day']}>
              {dayjs(event.dateStart).format('dddd')}
            </span>
            <span className={classes['event__info-date']}>
              {dayjs(event.dateStart).format('D MMMM')}
            </span>
            <span className={classes['event__info-time']}>
              {dayjs(event.dateStart).format('kk:mm')}
            </span>
          </div>

          <span className={classes['event__info-place']}>{event.location}</span>
        </div>

        <div className={classes['event__desc-text']}>
          {event.description}
        </div>
      </article>

      <article className={classes['event__participants']}>
        <header>
          <h4 className={classes['event__article-title']}>Участники</h4>
        </header>

        <Participants
          participants={event.participants}
          owner={event.owner}
        />
      </article>

      <article className={classes['event__gallery']}>
        <header className={classes['event__gallery-header']}>
          <h4 className={classes['event__article-title']}>Галерея</h4>

          <div className={classes['event__gallery-controls']}>
            <ArrowBtn
              direction='left'
              onClick={() => { sliderRef && sliderRef.current.swiper.slidePrev() }}
            />

            <ArrowBtn
              onClick={() => { sliderRef && sliderRef.current.swiper.slideNext() }}
            />
          </div>
        </header>

        <ImageSlider
          sliderRef={sliderRef}
          images={
            event.photos.map(photo => ({
              id: photo.id,
              src: backendBaseUrl + photo.url,
              alt: photo.name
            }))
          }
        />
      </article>
    </section>
  )
}

