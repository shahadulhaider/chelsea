import React from 'react'

import { Tag } from '../../ui/misc'

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag
          bck="#003366"
          size="58px"
          color="#ffffff"
        >
          Matches
        </Tag>

        Block

        <Tag
          bck="#ffffff"
          size="22px"
          color="#003366"
          link={true}
          linkTo="/matches"
        >
          See more matches
        </Tag>
      </div>
    </div>
  )
}

export default MatchesHome
