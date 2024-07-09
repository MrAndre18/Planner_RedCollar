import { useFetching } from 'src/shared/hooks';
import { QueryService } from 'src/shared/API';
import { useEffect, useState } from 'react';

export const getUsersByEvent = (params) => {
  const
    [users, setUsers] = useState([]),
    [fetch, isLoading, error] = useFetching(async () => {
      const response =
        await QueryService
          .getUsers(params)

      setUsers(response.data || [])
    })

  useEffect(() => {
    fetch();
  }, [])

  return [users, isLoading, error]
}