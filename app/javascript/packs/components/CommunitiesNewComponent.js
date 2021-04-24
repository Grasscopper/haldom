import React, { useState } from 'react'

const CommunitiesNewComponent = (props) => {
  let [community, setCommunity] = useState({
    name: "",
    description: "",
    image: ""
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
      description: "",
      image: ""
    })
  }

  const sendCreateCommunity = (event) => {
    event.preventDefault()
    props.createCommunity(community)
    clearForm()
  }

  let communityForm = <div></div>
  if (props.currentUser !== null && props.currentUser.admin) {
    communityForm = <div>
    <h1>Add Community</h1>
    <form onSubmit={sendCreateCommunity} autoComplete="off">
    <label htmlFor="name">Title</label>
    <input
      id="name"
      name="name"
      onChange={update}
      value={community.name}
    />
    <label htmlFor="description">Description</label>
    <textarea
      draggable="false"
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
    <button type="submit">Add Community</button>
    </form>
    </div>
  }

  return (
    <>
    {communityForm}
    </>
  )
}

export default CommunitiesNewComponent
