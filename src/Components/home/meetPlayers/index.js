import React, { Component } from 'react'
import Reveal from 'react-reveal/Reveal'

import Stripes from '../../../Resources/images/stripes.png'
import { Tag } from '../../ui/misc'
import PlayerCards from './cards'

class MeetPlayers extends Component {

  state = {
    show: false
  }

  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          })
        }}
      >
        <div className="home_meetplayers"
          style={{
            background: `#ffffff url(${Stripes})`
          }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <PlayerCards
                  show={this.state.show}
                />
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag
                    bck="#0e173e"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    Meet
                </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e173e"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    The
                </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e173e"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    Players
                </Tag>
                </div>
                <div>
                  <Tag
                    bck="#ffffff"
                    size="27px"
                    color="#0e173e"
                    link={true}
                    linkTo="/the_team"
                    add={{
                      display: 'inline-block',
                      marginBottom: '27px',
                      border: 'solid 1px #0e173e'
                    }}
                  >
                    Meet them here
                </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    )
  }
}

export default MeetPlayers
