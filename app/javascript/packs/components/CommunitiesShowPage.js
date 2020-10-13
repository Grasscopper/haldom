import React, { useEffect, useState, useRef } from 'react'

const CommunitiesShowPage = (props) => {
  let [community, setCommunity] = useState({
    name: "",
    description: ""
  })

  useEffect(() => {
    fetch(`/api/communities/${props.match.params.id}`)
    .then(response => response.json())
    .then(body => {
      setCommunity(body.community)
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="grid-container">
    <h2>{community.name}</h2>
    <p>{community.description}</p>
    </div>
  )
}

export default CommunitiesShowPage
