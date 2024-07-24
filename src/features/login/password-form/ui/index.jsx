import { ActionBtn } from 'src/shared/UI/buttons';
import classes from './index.module.scss';
import { Input } from 'src/shared/UI/input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    password: yup
      .string()
      .required("Обязательное поле")
      .min(8, 'Пароль должен содержать минимум 8 символов')
      .max(32, 'Пароль не может превышать 32 символа')
      .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?[\]\\\/.,;`~-])/, "Используйте латинские буквы, цифры и спец символы")
  })

export const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form
      className={classes.root}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register('password')}
        id='password'
        type='password'
        label='Пароль'
        error={!!errors.password}
        helperText={errors?.password?.message}
        value={watch('password')}
      />

      <ActionBtn style={{ width: '100%' }}>Войти</ActionBtn>
    </form>
  )
}
