import React from 'react'

const Team = () => {
  return (
    <div className='container teamSec'>
      <div className="row">
        <h2 className='text-center pb-5'>People</h2>
        <div className="col-4 text-center">
          <div className='ceoimg'>
            <img src="/ZerodhaImages/zerodhaImg/10.jpg" alt="ceoimg" />
            <p className='mt-4'>Nithin Kamanth</p> 
            <p>Founder, CEO</p>
          </div>
        </div>
                <div className="col-8">
                  <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p> <br /> 
                  <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p> <br /> 
                  <p>Playing basketball is his zen.</p> <br />
                  <p>Connect on <a href="">Homepage/ TradingQnA / Twitter</a>  </p>

                </div>

      </div>
    </div>
  )
}

export default Team