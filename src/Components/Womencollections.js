import React from 'react'

function Womencollections({Womenswear}) {
    
  return (
    <div className='collectionsection'>
      <h2>{Womenswear.title}</h2>
      <div className='bannerbox'>
        <img src='iamges/LadiesBanner.gif' alt='banner' />
      </div>
      <div className='menimages'>
        <div className='image-item'>
          <img src={Womenswear.image1} alt={Womenswear.title}/>
          <p className='price'>{Womenswear.price1}</p>
           <button className='add-to-cart'>Add to Cart</button>
        </div>
        <div className='image-item'>
          <img src={Womenswear.image2} alt={Womenswear.title}/>
          <p className='price'>{Womenswear.price2}</p>
          <button className='add-to-cart'>Add to Cart</button>

        </div>
        <div className='image-item'>
          <img src={Womenswear.image3} alt={Womenswear.title}/>
          <p className='price'>{Womenswear.price3}</p>
          <button className='add-to-cart'>Add to Cart</button>

        </div>
        <div className='image-item'>
          <img src={Womenswear.image4} alt={Womenswear.title}/>
          <p className='price'>{Womenswear.price4}</p>
          <button className='add-to-cart'>Add to Cart</button>

        </div>
        <div className='image-item'>
          <img src={Womenswear.image5} alt={Womenswear.title}/>
          <p className='price'>{Womenswear.price5}</p>
          <button className='add-to-cart'>Add to Cart</button>

        </div>
        <div className='image-item'>
          <img src={Womenswear.image6} alt={Womenswear.title}/>
          <p className='price'>{Womenswear.price6}</p>
          <button className='add-to-cart'>Add to Cart</button>

        </div>
        <div/>
      </div>
    </div>
  )
}

export default Womencollections
