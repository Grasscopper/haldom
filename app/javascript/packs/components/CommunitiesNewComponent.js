import React, { useState } from 'react'

const CommunitiesNewComponent = (props) => {
  let [community, setCommunity] = useState({
    name: "",
    description: ""
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
    <label htmlFor="name">Name</label>
    <input
      id="name"
      name="name"
      onChange={update}
      value={community.name}
    />
    <label htmlFor="description">Description</label>
    <input
      id="description"
      name="description"
      onChange={update}
      value={community.description}
      />
    <br />
    <button type="submit">Submit</button>
    </form>
    </div>
  }

  return (
    <>
    {communityForm}
    <h1>Communities</h1>
    </>
  )
}

export default CommunitiesNewComponent
