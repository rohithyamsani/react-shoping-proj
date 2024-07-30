import React from 'react';

function Collections({ Gentswear }) {
  return (
    <div className='collectionsection'>
      <h2>{Gentswear.title}</h2>
      <div className='menimages'>
        <div className='image-item'>
          <img src={Gentswear.image1} alt={Gentswear.title}/>
          <p className='price'>{Gentswear.price1}</p>
          <button className='add-to-cart'>Add to Cart</button>

        </div>
        <div className='image-item'>
          <img src={Gentswear.image2} alt={Gentswear.title}/>
          <p className='price'>{Gentswear.price2}</p>
          <button className='add-to-cart'>Add to Cart</button>

        </div>
        <div className='image-item'>
          <img src={Gentswear.image3} alt={Gentswear.title}/>
          <p className='price'>{Gentswear.price3}</p>
          <button className='add-to-cart'>Add to Cart</button>

        </div>
        <div className='image-item'>
          <img src={Gentswear.image4} alt={Gentswear.title}/>
          <p className='price'>{Gentswear.price4}</p>
          <button className='add-to-cart'>Add to Cart</button>

        </div>
        <div className='image-item'>
          <img src={Gentswear.image5} alt={Gentswear.title}/>
          <p className='price'>{Gentswear.price5}</p>
          <button className='add-to-cart'>Add to Cart</button>

        </div>
        <div className='image-item'>
          <img src={Gentswear.image6} alt={Gentswear.title}/>
          <p className='price'>{Gentswear.price6}</p>
          <button className='add-to-cart'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Collections;
