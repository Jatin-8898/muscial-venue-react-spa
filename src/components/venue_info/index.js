import React from 'react'

import icon_calender from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

 const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
          <div className="vn_wrapper">

            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
					<div className="vn_icon_square  bck_red"></div>
					<div 
						className="vn_icon"
						style={{
							background: `url(${icon_calender})`
						}}
					>
          			</div>
					 <div className="vn_title">
						Event Date & Time
					 </div> 
					 <div className="vn_desc">
						7 August 2019 @ 8:00 pm
					 </div> 
                </div>
              </div>
            </div>


			<div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
					<div className="vn_icon_square  bck_yellow"></div>
					<div 
						className="vn_icon"
						style={{
							background: `url(${icon_location})`
						}}
					>
          			</div>
					 <div className="vn_title">
						Event Location
					 </div> 
					 <div className="vn_desc">
						2th Street, Orelands, New York
					 </div> 
                </div>
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}

export default VenueInfo;