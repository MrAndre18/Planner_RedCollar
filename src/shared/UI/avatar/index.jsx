import classes from './index.module.scss';
import noPhoto from 'src/shared/img/head.png';

export const Avatar = ({ src, alt = 'avatar', size = 40, style }) => {
  return (
    <div
      className={classes.avatar}
      style={{
        width: size,
        height: size,
        ...style
      }}
    >
      {src ?
        <img
          className={classes['avatar__img']}
          src={src}
          alt={alt}
        /> :
        <img
          className={classes['avatar__no-photo']}
          src={noPhoto}
          alt={alt}
        />
      }
    </div>
  )
}
