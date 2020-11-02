import React, { useState } from 'react'

const TopicsIndexTile = (props) => {
  const sendDeleteTopic = (event) => {
    event.preventDefault()
    props.deleteTopic(props.topic.id)
  }

  let deleteButton = <div></div>
  if (props.topicDeleting && props.currentUser !== null && props.currentUser.user_name === props.topic.poster) {
    deleteButton = <button onClick={sendDeleteTopic} className="topic-delete-button">Delete</button>
  }

  return (
    <div className="topic-tile">
      <h3 className="topic-tile-name">{props.topic.name}</h3>
      <p className="poster">Posted by {props.topic.poster}</p>
      <p className="topic-description">{props.topic.description}</p>
      {deleteButton}
      <div className="img-div">
      </div>
    </div>
  )
}

export default TopicsIndexTile
