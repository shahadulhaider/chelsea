import React from 'react'
import { ChelseaLogo } from '../ui/icons'

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <ChelseaLogo
          width="120px"
          height="120px"
          link={true}
          linkTo="/"
        />
      </div>
      <div className="footer_discl">
        Chelsea FC 2018. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
