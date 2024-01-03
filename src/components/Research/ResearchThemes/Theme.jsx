import React from 'react'
import './Theme.css'
import themeImage from '../../../assets/researchThemeImage.jpg'

export const Theme = (theme) => {
  return (
    <div className="tMain">

      <div className="themeBlock">
        <div className="left">
          <div className="themeBox">

            <div className="title1">
              Theme title
            </div>

            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nesciunt error illo voluptatibus officiis consequuntur aperiam debitis voluptatum, illum asperiores repudiandae nobis et voluptate.
            </div>

            <div className="learnMore">
            Learn More
            </div>
            
          </div>
        </div>

        <div className="right">
          <div className="themeImage">
            <img src={themeImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
