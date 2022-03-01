import React, { useState } from 'react'
import { useEffect } from 'react';
import './Sidebar.css'
import SidebarPhotos from './SidebarPhotos';

function Sidebar({ data }) {


  let res = data;
  console.log(res);

  return (
    <div className='sidebar'>
      {data ? (
        data.map((d,index) => {
          return(
            <SidebarPhotos key={index} url={d.src.large} title={d.photographer} />
          )
        })
      ) : (
        <div>Yedi</div>
      ) }
    </div>
  )
}

export default Sidebar