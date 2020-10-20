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
    <h2>Add Topic</h2>
    <form onSubmit={sendCreateTopic} autoComplete="off">
    <label htmlFor="name">Name</label>
    <input
      id="name"
      name="name"
      onChange={update}
      value={topic.name}
    />
    <label htmlFor="description">Description</label>
    <textarea
      id="description"
      name="description"
      onChange={update}
      value={topic.description}
      />
    <button type="submit">Add Topic</button>
    </form>
    </div>
  }
  return (
    <>{topicForm}</>
  )
}

export default TopicsNewComponent
