import React from 'react'

function Main() {
  return (
    <div>
  <h1>MAIN</h1>
  <div classname='sidebar'>
        <ul className="sidebarList">
            <Link style={{textDecoration: 'none'}} to="/home">
            <li className= "sidebarListItem" style={{padding: "0"}}>
              <HomeRoundedIcon className="sideBarIcon"/>
              Home
            </li>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/library" >
            <li className="sidebarListItem" >
              <LibraryMusicRoundedIcon className="sideBarIcon"/>
              Your Library
            </li>
            </Link>
          </ul>
          <Outlet/>
        </div>
    </div>
  )
}

export default Main