import React from 'react'

const HeroImage = () => {
  return (
    <div className='container mt-5'>
      <div className="row text-center mt-5">
        <h1 className='mt-5'>Charges</h1>
        <p>list of all charges and taxes</p>
      </div>
      <hr />
      <div class="container text-center mt-5">
  <div class="row row-cols-3 mt-5">
    <div class="col mt-5">
      <img style={{width: "50%"}} src="/ZerodhaImages/zerodhaImg/22.jpg" alt="" />
      <h3 className='mt-3'>Free equity delivery</h3>
      <p className='mt-1'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
    </div>
    <div class="col mt-4">
      <img  style={{width: "60%"}} src="/ZerodhaImages/zerodhaImg/20r.jpg" alt="" />
      <h3 className='mt-3'>Intraday and F&O trades</h3>
      <p className='mt-1'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
    </div>
    <div class="col mt-5">
      <img style={{width: "50%"}} src="/ZerodhaImages/zerodhaImg/22.jpg" alt="" />
      <h3 className='mt-3'>Free direct MF</h3>
      <p className='mt-1'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
      </div>
  </div>
</div>
    </div>
  )
}

export default HeroImage