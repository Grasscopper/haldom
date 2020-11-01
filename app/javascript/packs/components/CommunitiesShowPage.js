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

  let topicTiles = community.topics.map((topic) => {
    return (
      <TopicsIndexTile key={topic.id} topic={topic} />
    )
  })

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
      createTopic={createTopic}/>
    <h1 id="topics">Topics</h1>
    {topicTiles}
    </div>
  )
}

export default CommunitiesShowPage
