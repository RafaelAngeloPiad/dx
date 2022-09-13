import React from 'react'
import "./css/PhotoSplash.css";
function PhotoSplash() {
  return (
    <>
    <div className="photoSplash"><div className="photoSplash-img-wrapper"><img src={process.env.PUBLIC_URL + `/images/ginger2.jpg`} width="100%" height="100%"/></div></div>
    </>
    )
}

export default PhotoSplash