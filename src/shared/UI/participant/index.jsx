import { Avatar } from '../avatar';
import classes from './index.module.scss';

export const Participant = ({ name, status, badge }) => {
  return (
    <div className={classes.participant}>
      <Avatar width={40} alt={name} />

      <div className={classes['participant__content']}>
        <span className={classes['participant__name']}>{name}</span>
        {badge ?
          <div className={classes['participant__badge']}>
            <span className={classes['participant__badge-text']}>{badge}</span>
          </div> :
          status &&
          <span className={classes['participant__status']}>{status}</span>
        }
      </div>
    </div>
  )
}
