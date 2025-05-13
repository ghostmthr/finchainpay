'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to your error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="error-container">
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
} 