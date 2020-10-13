import React, { useState, useEffect } from 'react'
import CommunitiesIndexTile from '../components/CommunitiesIndexTile'
import CommunitiesNewComponent from '../components/CommunitiesNewComponent'

const CommunitiesIndexContainer = (props) => {
  let [currentUser, setCurrentUser] = useState({})
  let [communities, setCommunities] = useState([])
  let [deleting, setDeleting] = useState(false)
  let [editing, setEditing] = useState(false)

  useEffect(() => {
    fetch('/api/communities')
    .then(response => response.json())
    .then(body => {
      setCurrentUser(body.currentUser)
      setCommunities(body.communities)
    })
    .catch(err => console.error(err))
  }, [])

  const createCommunity = (community) => {
    fetch('/api/communities', {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(community),
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(body => {
      setCommunities([
        ...communities,
        body
      ])
    })
    .catch(err => console.error(err))
  }

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

  const editCommunity = (communityID, community) => {
    fetch(`/api/communities/${communityID}`, {
      credntials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(community),
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

  const deleteChange = (event) => {
    event.preventDefault()
    setDeleting(!deleting)
  }

  const edit = (event) => {
    event.preventDefault()
    setEditing(!editing)
  }

  let communityTiles = communities.map((community) => {
    return (
      <CommunitiesIndexTile
      key={community.id}
      currentUser={currentUser}
      community={community}
      deleteCommunity={deleteCommunity}
      editCommunity={editCommunity}
      deleting={deleting}
      editing={editing} />
    )
  })

  let deleteButton = <div></div>
  if (currentUser !== null && currentUser.admin) {
    deleteButton = <button onClick={deleteChange}>Delete Communities</button>
  }

  let editButton = <div></div>
  if (currentUser !== null && currentUser.admin) {
    editButton = <button onClick={edit}>Edit Communities</button>
  }

  return (
    <div>
    <CommunitiesNewComponent
    currentUser={currentUser}
    createCommunity={createCommunity} />
    <h1>Communities</h1>
    {editButton}
    <br/>
    {deleteButton}
    {communityTiles}
    </div>
  )
}

export default CommunitiesIndexContainer
