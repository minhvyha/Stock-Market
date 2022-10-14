import React from 'react'
import {Link} from 'react-router-dom'
import {MainPageContext} from '../App'

function Account() {
   
  return (
    <>
    <Link to="/intro">
				<button className="btn-sign-out" onClick={handleSignOut}>
					Sign Out
				</button>
			</Link>
    </>
  )
}

export default Account