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
              svnldskvv vjvj pov vpor kvpdr vpor pvrop vpor voprj vpojro vjewo fopew fpoew fpojw epfj wepofj powej fpowej fpojew pofjwe pofjwepo jfpowe jfpowej pofj wepofj powe jfpowej fpowj epof wepj fpwejfpjwepofjwep
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
