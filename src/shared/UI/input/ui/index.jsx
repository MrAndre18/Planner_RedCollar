import { useEffect, useState } from 'react';
import classes from './index.module.scss';

import ClearImg from 'src/shared/img/svg/close/close-x32.svg?react';
import EyeCloseImg from 'src/shared/img/svg/eye/eye-close.svg?react';
import EyeOpenImg from 'src/shared/img/svg/eye/eye-open.svg?react';

export const Input = ({
  register,
  id,
  type = 'text',
  label,
  placeholder,
  required = false,
  error,
  helperText,
  value,
  clear
}) => {
  const
    [focused, setFocused] = useState(false),
    [clearIsVisible, setClearVisible] = useState(false),
    [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    setClearVisible((focused && !!value || error))
  }, [focused, value, error])

  return (
    <label
      className={classes.root}
      data-focused={focused}
      data-error={error}
      htmlFor={id}
    >
      <span
        className={classes.label}
        data-focused={focused || !!value}
      >
        {label}
        {required &&
          <span className={classes['label__required-pin']}>*</span>
        }
      </span>

      <input
        {...register}
        id={id}
        className={classes.input}
        autoComplete='off'
        type={type === 'password' ? showPassword ? 'text' : type : type}
        required={required}
        placeholder={placeholder}
        data-focused={focused || !!value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      {clear &&
        <button
          type='button'
          className={`${classes.adornment} ${classes['adornment-clear']}`}
          data-error={error}
          data-visible={clearIsVisible}
          onClick={e => {
            e.preventDefault
            clear()
          }}
        >
          <ClearImg />
        </button>
      }

      {type === 'password' &&
        <button
          type='button'
          className={`${classes.adornment} ${classes['adornment-switcher']}`}
          data-visible={!!value}
          onClick={e => {
            e.preventDefault
            setShowPassword(prev => !prev)
          }}
        >
          {showPassword ? <EyeOpenImg /> : <EyeCloseImg />}
        </button>
      }

      <p
        className={classes.notice}
        data-error={error}
        data-visible={!!helperText}
      >{helperText}</p>
    </label>
  )
}
