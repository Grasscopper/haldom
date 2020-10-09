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
  let communityTiles = communities.map((community) => {
    return (
      <CommunitiesIndexTile key={community.id} community={community} currentUser={currentUser}/>
    )
  })

  return (
    <div>
    {communityTiles}
    </div>
  )
}

export default CommunitiesIndexContainer
