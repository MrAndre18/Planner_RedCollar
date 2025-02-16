import { useState } from "react";

export const useFetching = (callback) => {
  const
    [isLoading, setIsLoading] = useState(false),
    [error, setError] = useState('')
  
  const fetching = async (...args) => {
    try {
      setIsLoading(true)
      await callback(...args)
    } catch (e) {
      setError(e.response.status)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
};