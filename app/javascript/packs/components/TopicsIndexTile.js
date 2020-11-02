import React, { useState } from 'react'

const TopicsIndexTile = (props) => {
  const sendDeleteTopic = (event) => {
    event.preventDefault()
    props.deleteTopic(props.topic.id)
  }

  let deleteButton = <div></div>
  //if we want to delete a topic and a user is logged in
  if (props.topicDeleting && props.currentUser !== null) {
    //if the current user is an admin,
    //allow the delete button for all topics
    if (props.currentUser.admin) {
      deleteButton = <button onClick={sendDeleteTopic} className="topic-delete-button">Delete</button>
    }
    //if this topic belongs to the current user and they are not an admin
    //only allow the delete button for the associated user
    else if (props.currentUser.user_name === props.topic.poster){
      deleteButton = <button onClick={sendDeleteTopic} className="topic-delete-button">Delete</button>
    }
    //I wanted to organize the conditional statements
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
