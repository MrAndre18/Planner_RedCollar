import { useFetching, useGroupByDate } from 'src/shared/hooks';
import { QueryService } from 'src/shared/API';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from 'src/shared/context';

export const getEvents = () => {
  const
    { choosedDate } = useContext(AppContext),
    [events, setEvents] = useState([]),
    [eventsRange, setEventsRange] = useState({}),
    // Fetching
    [fetch, isLoading, error] = useFetching(async () => {
      const response =
        await QueryService
          .getEvents(eventsRange)

      setEvents(useGroupByDate(response.data) || [])
    })

  useEffect(() => {
    Object.keys(eventsRange).length && fetch(eventsRange);
  }, [eventsRange])

  useEffect(() => {
    setEventsRange({
      gte: choosedDate.value.startOf('month').toJSON(),
      lte: choosedDate.value.endOf('month').toJSON()
    });
  }, [choosedDate.value])

  return [events, isLoading, error]
}