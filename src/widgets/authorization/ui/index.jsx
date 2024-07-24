import { Modal } from 'src/shared/UI/modal';
import classes from './index.module.scss';
import { Login } from 'src/features/login';
import { Registration } from 'src/features/registration';
import { useState } from 'react';

export const Authorization = ({ isOpen, setOpen }) => {
  const
    [isLogin, setLogin] = useState(true),
    [isRegistration, setRegistration] = useState(false),
    [email, setEmail] = useState(''),
    [emailConfirmed, setEmailConfirmed] = useState(false)

  return (
    <>
      <Modal
        title='Вход'
        open={isOpen}
        closeModal={() => { setOpen(false) }}
        width={600}
        style={{
          body: {
            height: 510,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
          header: {
            marginBottom: 40
          },
          content: {
            width: 346
          },
          footer: {
            marginTop: 64
          }
        }}
      >
        {isLogin &&
          <Login
            email={email}
            setEmail={setEmail}
            emailConfirmed={emailConfirmed}
            setEmailConfirmed={setEmailConfirmed}
          />
        }

        {isRegistration && <Registration />}
      </Modal>
    </>
  )
}
