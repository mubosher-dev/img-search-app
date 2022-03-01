import React, { useEffect } from 'react'
import "./Header.css";
import { API_KEY } from '../../axios';
import axios from '../../axios';
import { useState } from 'react';
import { Button } from '@mui/material';
import Sidebar from '../SideBar/Sidebar'


function Header() {

  const [data, setData] = useState('');

  const [search, setSearch] = useState();

  const [photo, setPhotos] = useState();


  const fetchData = async (url) => {
    const req = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: API_KEY
      }
    })
    setData(req.data.photos);
  }
  useEffect(() => {
    fetchData(`search?query=banana&per_page=15&page=1`)
  }, [])

  console.log(search);
  console.log(photo);

  const fetchedData = (e) => {
    e.preventDefault();

    if (search === undefined) {
      alert("nimani qidiryapsiz")
    }
    else {
      fetchData(`search?query=${search}&per_page=15&page=1`)
    }
  }
  return (
    <>
      <div className='main__header'>
        <div className="main_header-left">
          <img
            className='header__logo'
            src="https://www.pngplay.com/wp-content/uploads/12/Pinterest-Logo-PNG-Images-HD.png" alt="logo__img" />
          <Button
            className='header__black'
          > Asosiy </Button>
        </div>

        <div className="main__header-center">
          <form className='form' onSubmit={fetchedData} >
            <img src="https://www.iconpacks.net/icons/2/free-search-icon-3076-thumb.png" alt="search_icon"
              className="header__icon"
            />
            <input className="header__info"
              onChange={e => { setSearch(e.target.value) }}
              value={search}
            />
          </form>
        </div>

        <div className="main__header-right">
          <img src="https://www.nicepng.com/png/detail/207-2078186_comment-free-icon-comment-free-download.png" alt="massanger"
            className="header__icon"
          />
          <img src="https://toppng.com/uploads/preview/lease-share-with-others-and-hit-the-bell-icon-next-subscribe-button-with-bell-ico-11562851774ld8r0rogk7.png" alt="massanger"
            className="header__icon"
          />
        </div>

      </div>

      <Sidebar data={data} />
    </>

  )
}

export default Header;