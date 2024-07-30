import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Footer from'../Components/Footer'
import Collections from '../Components/Collections'
import  {Gents, Ladies} from '../Data' // Import Gents and Ladies variables from the correct location
import Womencollections from '../Components/Womencollections'


function Minipage() {
 
  console.log(Gents)
  return (
    <div>
      <Header />
      <Banner/>
      <Collections Gentswear={Gents}/>
      <Womencollections Womenswear={Ladies}/>
      <Footer/>
    </div>
  )
}

export default Minipage
