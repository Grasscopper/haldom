import React from 'react'

const TopicsIndexTile = (props) => {
  return (
    <div>
      <h1>{props.topic.name}</h1>
      <p>{props.topic.description}</p>
    </div>
  )
}

export default TopicsIndexTile
