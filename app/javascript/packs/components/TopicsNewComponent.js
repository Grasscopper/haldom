import React, { useState } from 'react'

const TopicsNewComponent = (props) => {
  let [topic, setTopic] = useState({
    name: "",
    description: "",
    community_id: props.communityID
  })

  const sendCreateTopic = (event) => {
    event.preventDefault()
    props.createTopic(topic)
    clearForm()
  }

  const update = (event) => {
    event.preventDefault()
    setTopic({
      ...topic,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    setTopic({
      name: "",
      description: ""
    })
  }

  let topicForm = <div></div>
  if (props.currentUser !== null) {
    topicForm = <div>
    <h1>Add Topic</h1>
    <form onSubmit={sendCreateTopic} autoComplete="off">
    <label htmlFor="name">Name</label>
    <input
      id="name"
      name="name"
      onChange={update}
      value={topic.name}
    />
    <label htmlFor="description">Description</label>
    <input
      id="description"
      name="description"
      onChange={update}
      value={topic.description}
      />
    <br />
    <button type="submit">Add Topic</button>
    </form>
    </div>
  }
  return (
    <>{topicForm}</>
  )
}

export default TopicsNewComponent
