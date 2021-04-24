import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CommunitiesIndexTile = (props) => {
  let [community, setCommunity] = useState({
    name: props.community.name,
    description: props.community.description,
    image: props.community.image
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
    <label htmlFor="image">Image</label>
    <input
      id="image"
      name="image"
      onChange={update}
      value={community.image}
    />
    <br />
    <button type="submit">Edit</button>
    </form>
  }

  return (
    <div className="community-tile-div">
      <Link to={`/communities/${props.community.id}`}>
        <div className="image-div">
          <img src={props.community.image} />
        </div>
        <div id="hide-text-highlight">
          <h1 className="community-tile-name">{props.community.name}</h1>
          <p>{props.community.description}</p>
        </div>
      </Link>
      {editForm}
      {deleteButton}
    </div>
  )
}

export default CommunitiesIndexTile
