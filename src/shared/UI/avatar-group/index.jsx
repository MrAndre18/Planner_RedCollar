import classes from './index.module.scss';

export const AvatarGroup = ({ children, gap, ltr = true }) => {
  return (
    <div className={classes['avatars-group']}>
      {children.map((item, index) =>
        <div
          key={index}
          className={classes['avatars-group__item']}
          style={{
            position: 'relative',
            zIndex: ltr ? children.length - index : index,
            marginLeft: index !== 0 ? -gap : 0
          }}
        >
          {item}
        </div>
      )}
    </div>
  )
}
