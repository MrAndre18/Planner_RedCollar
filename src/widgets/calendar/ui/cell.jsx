import { monthsAbbreviated } from '../config';
import { ShowEvent } from 'src/features/show-event';
import './cell.scss';
import { useEffect, useRef } from 'react';

import 'overlayscrollbars/overlayscrollbars.css';
import { useOverlayScrollbars } from 'overlayscrollbars-react';

export const cellRender = (current, info, events) => {
  const
    // Scroll
    rootRef = useRef(),
    scrollOptions = {
      overflow: {
        x: 'hidden',
      },
      scrollbars: {
        theme: 'os-theme-custom',
        autoHide: 'never',
      },
    },
    [scrollInitialize, scrollInstance] = useOverlayScrollbars({
      options: scrollOptions,
      events: {},
      defer: true
    })

    useEffect(() => {
      rootRef && scrollInitialize(rootRef.current);
    }, [scrollInitialize]);

  return (
    <div ref={rootRef} className={info.originNode.props.className}  data-overlayscrollbars-initialize>
      <span className={`${info.originNode.props.className}-value`}>
        {current.date() === 1 ?
          `${current.date()} ${monthsAbbreviated[current.month() + 1]}` :
          current.date()}
      </span>

      <div className={`${info.originNode.props.className}-content`}>
        {current.format('YYYY-MM-DD') in events &&
          <ul className="events-list">
            {events[current.format('YYYY-MM-DD')].map(event =>
              <li key={event.id} className='events-list__item'>
                <ShowEvent event={event} />
              </li>
            )}
          </ul>
        }
      </div>
    </div>
  )
};
