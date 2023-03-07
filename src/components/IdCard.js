import React from 'react'

const IdCard = (props) => {
  return (
    <div class="idCardContainer">
      <div class="imgIdCard">
        <img src={props.picture} alt="" />
      </div>
      <div class="infos">
        <p><span>First name:</span> {props.firstName}</p>
        <p><span>Last name:</span> {props.lastName}</p>
        <p><span>Gender:</span> {props.gender}</p>
        <p><span>Height:</span> {props.height/100}m</p>
        <p><span>Birth:</span> {props.birth}</p>
      </div>
    </div>
  )
}

export default IdCard
