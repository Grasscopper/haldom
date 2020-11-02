import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TopicsIndexTile from './TopicsIndexTile'
import TopicsNewComponent from './TopicsNewComponent'

const CommunitiesShowPage = (props) => {
  let [currentUser, setCurrentUser] = useState({})
  let [community, setCommunity] = useState({
    name: "",
    description: "",
    topics: []
  })
  let [topicDeleting, setTopicDeleting] = useState(false)

  const changeDeleting = (event) => {
    event.preventDefault()
    setTopicDeleting(!topicDeleting)
  }

  useEffect(() => {
    fetch(`/api/communities/${props.match.params.id}`)
    .then(response => response.json())
    .then(body => {
      setCurrentUser(body.currentUser)
      setCommunity(body.community)
    })
    .catch(err => console.error(err))
  }, [])

  const createTopic = (topic) => {
    topic.community_id = props.match.params.id
    fetch('/api/topics', {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(topic),
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(body => {
      setCommunity(body)
    })
    .catch(err => console.error(err))
  }

  const deleteTopic = (topicID) => {
    fetch(`/api/topics/${topicID}`, {
      credentials: "same-origin",
      method: "DELETE",
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json"
      }
    })
    .then(response => response.json())
    .then(body => {
      setCommunity({
        name: community.name,
        description: community.description,
        topics: body
      })
    })
    .catch(err => console.error(err))
  }

  let topicTiles = community.topics.map((topic) => {
    return (
      <TopicsIndexTile
        key={topic.id}
        currentUser={currentUser}
        topic={topic}
        deleteTopic={deleteTopic}
        topicDeleting={topicDeleting} />
    )
  })

  let deleteTopics = <div></div>
  if (currentUser !== null) {
    if (topicDeleting) {
      deleteTopics = <button onClick={changeDeleting} className="topic-delete-button">Now Deleting</button>
    }
    else {
      deleteTopics = <button onClick={changeDeleting}>Delete Topics</button>
    }
  }

  return (
    <div className="grid-container" id="communities-show-container">
    <h1 id="communities-title">Community</h1>
    <div className="community-tile-div" id="community-show-div">
      <Link to="/communities">
        <h1 className="community-tile-name">{community.name}</h1>
      </Link>
      <p>{community.description}</p>
    </div>
    <TopicsNewComponent
      currentUser={currentUser}
      createTopic={createTopic} />
    <h1 id="topics">Topics</h1>
    {deleteTopics}
    {topicTiles}
    </div>
  )
}

export default CommunitiesShowPage
