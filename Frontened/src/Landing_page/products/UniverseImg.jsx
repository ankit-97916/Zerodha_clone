import React from 'react'

const UniverseImg = ({imgUrl, imgDescription}) => {
  return (
        <div class="col">
      <img style={{width: "50%"}} src={imgUrl} alt="" />
      <p className='m-3'> {imgDescription}
</p>
    </div>

  )
}

export default UniverseImg