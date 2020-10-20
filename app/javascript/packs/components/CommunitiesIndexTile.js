import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CommunitiesIndexTile = (props) => {
  let [community, setCommunity] = useState({
    name: props.community.name,
    description: props.community.description
  })

  const update = (event) => {
    event.preventDefault()
    setCommunity({
      ...community,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    setCommunity({
      name: "",
      description: ""
    })
  }

  const sendDeleteCommunity = (event) => {
    event.preventDefault()
    props.deleteCommunity(props.community.id)
  }

  const sendEditCommunity = (event) => {
    event.preventDefault()
    props.editCommunity(props.community.id, community)
    // clearForm()
  }

  let deleteButton = <div></div>
  if (props.deleting && props.currentUser !== null && props.currentUser.admin) {
    deleteButton = <button onClick={sendDeleteCommunity}>Delete</button>
  }

  let editForm = <div></div>
  if (props.editing && props.currentUser !== null && props.currentUser.admin) {
    editForm = <form onSubmit={sendEditCommunity} autoComplete="off">
    <label htmlFor="name">Name</label>
    <input
      id="name"
      name="name"
      onChange={update}
      value={community.name}
    />
    <label htmlFor="description">Description</label>
    <textarea
      id="description"
      name="description"
      onChange={update}
      value={community.description}
      />
    <br />
    <button type="submit">Edit</button>
    </form>
  }

  return (
    <div className="community-tile-div">
    <Link to={`/communities/${props.community.id}`}>
      <h1 className="community-tile-name">{props.community.name}</h1>
    </Link>
    <p>{props.community.description}</p>
    {editForm}
    {deleteButton}
    </div>
  )
}

export default CommunitiesIndexTile
