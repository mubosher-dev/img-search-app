import React from 'react'

function SidebarPhotos({url,title}) {
  return (
    <div className="wrapper">
        <img src={url} alt={title} />
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarPhotos