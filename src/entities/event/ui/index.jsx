import dayjs from 'dayjs';
import classes from './index.module.scss';
import { Participants } from './participants';
import { Carousel } from 'antd';
import { backendBaseUrl } from 'src/shared/API/config';
import { useRef } from 'react';

export const Event = ({ event }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.next();
  };
  const previous = () => {
    sliderRef.prev();
  };
  return (
    <section className={classes.event}>
      <header>
        <h3 className={classes['event__title']}>{event.title}</h3>
      </header>

      <article className={classes['event__desc']}>
        <div className={classes['event__info']}>
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

      <div className={classes['event__participants']}>
        <h4 className={classes['event__article-title']}>Участники</h4>

        <Participants
          participants={event.participants}
          owner={event.owner}
        />
      </div>


      <article className={classes['event__gallery']}>
        <h4 className={classes['event__article-title']}>Галерея</h4>

        <Carousel
          ref={slider => {
            sliderRef = slider;
          }}
          slidesToShow={3}
          dots={false}
          infinite={false}
          speed={600}
          easing='cubic-bezier(0.25, 0.1, 0.25, 1)'
        >
          {event.photos.map(photo =>
            <div key={photo.id}>
              <img src={backendBaseUrl + photo.url} alt={photo.name} />
            </div>
          )}
        </Carousel>
      </article>

      <button onClick={previous}>Назад</button>
      <button onClick={next}>Вперёд</button>
    </section>
  )
}

