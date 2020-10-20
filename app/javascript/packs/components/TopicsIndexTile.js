import React from 'react'

const TopicsIndexTile = (props) => {
  return (
    <div className="topic-tile">
      <h3 className="topic-tile-name">{props.topic.name}</h3>
      <p>{props.topic.description}</p>
    </div>
  )
}

export default TopicsIndexTile
