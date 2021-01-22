import React from 'react'
import { useQuery } from 'react-query'
import { reactQuery } from '../server'

export default function Test() {
  return <Example />
}

function Example() {
  const { data, error, isLoading } = useQuery<any, Error>(
    'repoData',
    reactQuery,
  )

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{'An error has occurred: ' + error.message}</div>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}
