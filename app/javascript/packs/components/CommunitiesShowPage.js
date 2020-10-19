import React, { useEffect, useState } from 'react'
import TopicsIndexTile from './TopicsIndexTile'

const CommunitiesShowPage = (props) => {
  let [community, setCommunity] = useState({
    name: "",
    description: "",
    topics: []
  })

  useEffect(() => {
    fetch(`/api/communities/${props.match.params.id}`)
    .then(response => response.json())
    .then(body => {
      setCommunity(body.community)
    })
    .catch(err => console.error(err))
  }, [])

  let topicTiles = community.topics.map((topic) => {
    return (
      <TopicsIndexTile key={topic.id} topic={topic} />
    )
  })

  return (
    <div className="grid-container">
    <h2>{community.name}</h2>
    <p>{community.description}</p>
    {topicTiles}
    </div>
  )
}

export default CommunitiesShowPage
