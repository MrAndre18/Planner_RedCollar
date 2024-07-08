import dayjs from 'dayjs';
import classes from './event.module.scss';
import { Avatar } from 'src/shared/UI/avatar';
import { Participant } from 'src/shared/UI/participant';

export const EventContent = ({ event }) => {
  console.log(event);
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

      <article className={classes['event__participants']}>
        <h4 className={classes['event__article-title']}>Участники</h4>

        <ul className={classes['event__participants-list']}>
          <li className={classes['event__participants-item']}>
            <Participant
              name={event.owner.username.split(' ')[0]}
              badge='организатор'
            />
          </li>

          {event.participants.length > 5 ?
            <>
              {event.participants.slice(0, 4).map(participant => (
                <li key={participant.id} className={classes['event__participants-item']}>
                  <Participant
                    name={participant.username.split(' ')[0]}
                  />
                </li>
              ))}

              <li className={classes['event__participants-item']}>
                Еще +{event.participants.length - 4}
              </li>
            </>
            :
            event.participants.map(participant => (
              <li key={participant.id} className={classes['event__participants-item']}>
                <Participant
                  name={participant.username.split(' ')[0]}
                />
              </li>
            ))
          }
        </ul>

      </article>

      <article className={classes['event__gallery']}>
        <h4 className={classes['event__article-title']}>Галерея</h4>
      </article>
    </section>
  )
}
