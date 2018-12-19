import React from 'react'
import { Link } from 'react-router-dom'
import cfcLogo from '../../Resources/images/logos/chelsea_logo.png'

export const ChelseaLogo = (props) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${cfcLogo}) no-repeat`
      }}
    ></div>
  )

  if (props.link) {
    return (
      <Link to={props.linkTo} className="link_logo">
        {template}
      </Link>
    )
  } else {
    return template
  }
}
