import React from 'react'

import Enroll from './Enroll'
import PromotionAnimation from './PromotionAnimation'

const Promotion = () => {
  return (
    <div className="promotion_wrapper bck_lgrey" >
      <div className="container">
        <PromotionAnimation />
        <Enroll />
      </div>
    </div>
  )
}

export default Promotion
