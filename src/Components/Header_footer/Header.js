import React, { Component } from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { ChelseaLogo } from '../ui/icons'

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#034694',
          padding: '10px 0',
          borderBottom: '2px solid #00285e'
        }}
      >
        <Toolbar style={{ display: 'flex' }}>

          <div style={{ flexGrow: 1 }}>
            <div className="header-logo">
              <ChelseaLogo
                link={true}
                linkTo="/"
                width= "70px"
                height= "70px"
            />
            </div>
          </div>

          <Link to="/the_team">
            <Button color="inherit">the team</Button>
          </Link>

          <Link to="/matches">
            <Button color="inherit">matches</Button>
          </Link>

        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
