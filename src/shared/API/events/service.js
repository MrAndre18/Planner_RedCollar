import { useFetching, useGroupByDate } from 'src/shared/hooks';
import { QueryService } from 'src/shared/API';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from 'src/shared/context';

export const getEventsForChoosedMonth = (params) => {
  const
    { choosedDate } = useContext(AppContext),
    [events, setEvents] = useState([]),
    [eventsRange, setEventsRange] = useState({}),
    // Fetching
    [fetch, isLoading, error] = useFetching(async () => {
      const response =
        await QueryService
          .getEvents({
            ...params,
            'filters[dateStart][$gte]': eventsRange.gte,
            'filters[dateStart][$lte]': eventsRange.lte,
          })

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