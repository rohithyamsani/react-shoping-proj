import React from 'react'

function Header() {
  return (
    <div className='headersection'>
      <div className='left'>
        <div className='title'>
          <h2>shopz</h2>
        </div>
      </div> 
      <div className='center'>
        <ul>
          <li>Womenfolk</li>
          <li>Mens</li>
          <li>Child</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className='search'>
        <input type='text' placeholder='Search'/>
      </div>
      <div className='right'>
        <div className='siginin'>
            Signin/Signup
        </div>
        <div className='cart'>
            Cart
        </div>
      </div>
    </div>
  )
}

export default Header
