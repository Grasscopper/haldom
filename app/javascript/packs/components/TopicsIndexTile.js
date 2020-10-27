import React from 'react'

const TopicsIndexTile = (props) => {
  return (
    <div className="topic-tile">
      <h3 className="topic-tile-name">{props.topic.name}</h3>
      <p className="poster">Posted by {props.topic.poster}</p>
      <p className="topic-description">{props.topic.description}</p>
      <div className="img-div">
      </div>
    </div>
  )
}

export default TopicsIndexTile
