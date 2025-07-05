import React from 'react'
import "./SupportPageCss.css"

const Hero = () => {
  return (
    <div className='container-fluid p-5 '>
      <div className="container mt-5">
        <div className="row headRow">
          <div className="col">
                <h3 className='text-start mt-2 h3'>Support Portal</h3>
          </div>

<div className="col">
  <p className='text-end fs-5 p'> <a className='a' href="">Track Tickets</a></p>
</div>
        </div>
        <div className="row mt-5">
          <div className="col-6 text-start leftCol">
            <h3 className='fs-4 h3'>Search for an answer or browse help topics to create a ticket</h3>
            <div className='mt-5 supportForm'>
              <form action="">
                <input  type="text" />
                <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
              </form>
            </div>
            <div className='supportLinks mt-3' >
              <p> <a href="http://">Track account opening</a> </p>
              <p> <a href="">Track segment activation</a> </p>
              <p> <a href="">Intraday margins</a> </p>
              <p> <a href="">Kite user manual</a> </p>
            </div>
          </div>
          <div className="col-6 rightCol">
               <h3 className='fs-4'>Featured</h3>
               <ol className='mt-4'>
                <li className='mt-4'> <a href="">MCX Crude option contract expiry - June 2025</a> </li>
                <li className='mt-4'> <a href="">Latest Intraday leverages and Square-off timings</a>
 </li>
               </ol>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero