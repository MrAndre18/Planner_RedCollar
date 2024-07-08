import classes from './index.module.scss';

export const EventBadge = ({ title, clickHandler, isPast = true }) => {
  return (
    <button
      className={`${classes.badge} ${isPast ? classes['badge--past'] : ''}`}
      onClick={clickHandler}
    >
      <span className={classes['badge__title']}>
        {title}
      </span>
    </button>
  )
}
