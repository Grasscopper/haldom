import React, { useState, useEffect } from 'react'
import CommunitiesIndexTile from './CommunitiesIndexTile'

const CommunitiesIndexContainer = (props) => {
  let [currentUser, setCurrentUser] = useState({})
  let [communities, setCommunities] = useState([])
  useEffect(() => {
    fetch('/api/communities')
    .then(response => response.json())
    .then(body => {
      setCurrentUser(body.currentUser)
      setCommunities(body.communities)
    })
    .catch(err => console.error(err))
  }, [])

  const deleteCommunity = (communityID) => {
    fetch(`/api/communities/${communityID}`, {
      credentials: "same-origin",
      method: "DELETE",
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json"
      }
    })
    .then(response => response.json())
    .then(body => {
      setCommunities(body)
    })
    .catch(err => console.error(err))
  }

  let communityTiles = communities.map((community) => {
    return (
      <CommunitiesIndexTile
      key={community.id}
      currentUser={currentUser}
      community={community}
      deleteCommunity={deleteCommunity}/>
    )
  })

  return (
    <div>
    {communityTiles}
    </div>
  )
}

export default CommunitiesIndexContainer
