import React from 'react'
import { useParams } from 'react-router-dom'

export const Dynamic_Route = () => {
    const params = useParams()
  return (
    <div>Dynamic_Route ------------ {params.id}</div>
  )
}
