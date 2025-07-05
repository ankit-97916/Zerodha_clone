import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
        <div className='container text-center mt-5 openAccount'>
      <div className="row">
        <h2> 404 Not found ,  <br /> couldn’t find that page</h2>
        <p>We couldn’t find the page you were looking for.
          <Link to="/">Visit Zerodha’s home page </Link> </p>
      </div>
    </div>

  )
}

export default NotFound