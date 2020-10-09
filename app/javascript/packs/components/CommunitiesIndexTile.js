import React from 'react'

const CommunitiesIndexTile = (props) => {
  const sendDeleteCommunity = (event) => {
    event.preventDefault()
    props.deleteCommunity(props.community.id)
  }

  let deleteButton = <div></div>
  if (props.currentUser !== null && props.currentUser.admin) {
    deleteButton = <button onClick={sendDeleteCommunity}>Delete Community</button>
  }

  return (
    <div>
    <h2>{props.community.name}</h2>
    <p>{props.community.description}</p>
    {deleteButton}
    </div>
  )
}

export default CommunitiesIndexTile
