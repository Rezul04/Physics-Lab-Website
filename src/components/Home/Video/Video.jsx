import React from 'react'
import './video.css'

const Video = () => {
  return (
    <div className='homeVideo'>
      

      <div className="heading">
        <h3> Take a digital tour of our Laboratory </h3>
      </div>
      <div className="videoHolder">
       
       {/* <video  src="https://www.youtube.com/embed/iD3TZ_Xxc14?si=sIwWjryiNqxky64Z" autoPlay controls muted></video> */}
        <iframe src="https://www.youtube.com/embed/vsR-yiGFDZc?si=pJqs1t27lUC9apFB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Video
