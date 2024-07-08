import classes from './index.module.scss';
import { Modal as ModalAntd } from 'antd';

import CloseImg from 'src/shared/img/svg/close/close-x40.svg?react';

const sizes = {
  'xs': 600,
  's': 710,
  'm': 770,
  'lg': 1075,
}

export const Modal = ({
  children,
  open = false,
  closeModal,
  size = 'xs', // 'xs' | 's' | 'm' | 'lg'
  bodyStyles = {
    padding: '80px 64px 64px 64px'
  }

}) => {
  const modalBody = () => {
    return (
      <div
        className={`${classes['modal__body']} ${classes[`modal__body--${size}`]}`}
        style={bodyStyles}
      >
        <button className={classes['modal__close']} onClick={closeModal}>
          <CloseImg />
        </button>

        <div className={classes['modal__content']}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <>
      <ModalAntd
        rootClassName={classes['modal-root']}
        className={classes.modal}
        classNames={{
          mask: classes['modal__mask'],
          wrapper: classes['modal__wrapper']
        }}
        open={open}
        footer={null}
        centered={true}
        onCancel={closeModal}
        width={sizes[size]}
        // loading={false}
        modalRender={modalBody}
      />
    </>
  )
}
