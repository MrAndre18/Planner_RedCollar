import classes from './index.module.scss';

export const ActionBtn = ({
  children,
  secondary = false,
  disabled = false,
  onClick,
  style
}) => {
  return (
    <button
      className={`${classes.button} ${secondary ?
        classes['button--outlined'] :
        classes['button--colored']}`}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  )
}
