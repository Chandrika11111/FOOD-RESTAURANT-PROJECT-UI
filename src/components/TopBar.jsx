import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <section className="TopBarSection">
        <div className="companyName">
          <Link to='/' className='link'>
            <h2>Taste Heaven</h2>
          </Link>
            </div>
            <div className="searchBar">
                <input type='text' placeholder='search...'/>
                </div>
                <div className="userAuth">
                 Login/SingUp
                 </div> 
    </section>
  )
}

export default TopBar