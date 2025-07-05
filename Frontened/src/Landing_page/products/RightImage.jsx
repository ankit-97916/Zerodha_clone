import React from 'react'

const RightImage = ({productName,productDescription, learnmore, imgUrl}) => {
  return (
        <div className="container mt-5">
      <div className="row">
        <div className="col-5 mt-5">
          <div className="row mt-5">
            <h2 className='mt-5'>{productName}</h2>
            <p>
              {productDescription}
            </p>
            <br />
            <a href="">{learnmore}</a>
          
          </div>
        </div>
                <div className="col-7 ">
          <img style={{width: "100%"}} src={imgUrl} alt="" />
        </div>

      </div>
    </div>

  )
}

export default RightImage