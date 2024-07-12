import classes from './index.module.scss';
import { Modal as ModalAntd } from 'antd';

import CloseImg from 'src/shared/img/svg/close/close-x40.svg?react';

export const Modal = ({
  children,
  title,
  footer = null,
  open = false,
  closeModal,
  width = 600,
  style = {
    body: {
      padding: '80px 64px'
    },
    header: {
      marginBottom: 40
    },
    content: {},
    footer: {}
  }
}) => {
  const modalBody = () => {
    return (
      <div
        className={classes['modal__body']}
        style={style.body}
      >
        <button className={classes['modal__close']} onClick={closeModal}>
          <CloseImg />
        </button>

        {title &&
          <header style={style.header}>
            <h3 className={classes['modal__title']}>{title}</h3>
          </header>
        }

        <div
          className={classes['modal__content']}
          style={style.content}
        >
          {children}
        </div>

        {footer &&
          <footer style={style.footer}>
            {footer}
          </footer>
        }
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
        width={width}
        modalRender={modalBody}
        destroyOnClose={true}
      />
    </>
  )
}
