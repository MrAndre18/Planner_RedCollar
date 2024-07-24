import { ActionBtn } from 'src/shared/UI/buttons';
import classes from './index.module.scss';
import { Input } from 'src/shared/UI/input';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFetching } from 'src/shared/hooks';
import { QueryService } from 'src/shared/API';

const schema = yup
  .object({
    email: yup
      .string()
      .email("Некорректный e-mail")
      .required("Обязательное поле")
  })

export const EmailForm = ({ setEmail, setEmailConfirmed }) => {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const
    [isExist, setExist] = useState(false)

  useEffect(() => {
    setEmailConfirmed(isExist)
  }, [isExist])

  const onSubmit = data => {
    setEmail(data.email)

    QueryService
      .checkUserExist(data.email)
      .then(status => setExist(status < 400))
      .catch(error => {
        console.log(error);
      })
      // .catch(() => setExist(false))
  }

  return (
    <form
      className={classes.root}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register('email')}
        id='email'
        type='email'
        label='E-mail'
        error={!!errors.email}
        helperText={errors?.email?.message}
        value={watch('email')}
        clear={() => resetField('email')}
      />

      <ActionBtn style={{ width: '100%' }}>Далее</ActionBtn>
    </form>
  )
}
