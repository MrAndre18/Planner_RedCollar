import { Participant } from 'src/shared/UI/participant';
import classes from './index.module.scss';
import { Avatar } from 'src/shared/UI/avatar';
import { AvatarGroup } from 'src/shared/UI/avatar-group';

export const Participants = ({ participants, owner }) => {
  const
    usersToShow = participants.length > 5 ?
      participants.slice(0, 4) :
      participants,
    usersOverflow = participants.length > 5 ?
      participants.slice(4, participants.length) : []

  return (
    <ul className={classes.participants}>
      <li className={classes['participants__item']}>
        <Participant
          name={owner.username.split(' ')[0]}
          badge='организатор'
        />
      </li>

      {usersToShow.map(user => (
        <li key={user.id} className={classes['participants__item']}>
          <Participant
            name={user.username.split(' ')[0]}
          />
        </li>
      ))}

      {usersOverflow.length ?
        <li className={`${classes['participants__item']} ${classes['participants__overflow']}`}>
          <AvatarGroup gap={26}>
            {usersOverflow.slice(0, 3).map(user =>
              <div key={user.id}>
                <Avatar
                  alt={user.username.split(' ')[0]}
                  size={40}
                  style={{
                    outline: '1px solid #ffffff'
                  }}
                />
              </div>
            )}
          </AvatarGroup>

          <span className={classes['participants__overflow-count']}>
            Еще +{usersOverflow.length}
          </span>
        </li>
        : <></>
      }
    </ul>
  )
}
