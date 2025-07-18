import React from 'react'
import "./AboutPage.css"
const Hero = () => {
  return (
    <>
    <div className='container text-center  AboutHero'>
    <div className="row">
      <h1>We pioneered the discount broking model in India. <br />
Now, we are breaking ground with our technology.</h1>
      </div>
      </div>

      {/* text area */}
      <div className="container textArea">
            <div className="row">
        <div className="col-6">
          <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.

Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail</p>
        </div>
          <div className="col-6">
            <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
  <a href="">Rainmatter</a>
, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.

And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="">blog</a>  or see what the media is <a href="">saying about us</a>  or learn more about our business and product <a href="">philosophies</a> s.</p>
          </div>

      </div>
      </div>

      </>
  )
}

export default Hero