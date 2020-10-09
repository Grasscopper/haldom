import React from 'react'

const CommunitiesIndexTile = (props) => {
  let deleteButton = <div></div>
  if (props.currentUser !== null && props.currentUser.admin) {
    deleteButton = <button>Delete Community</button>
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
