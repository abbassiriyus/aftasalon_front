import { FC } from "react"
import React from 'react'
import Footer from '../pages/js/Footer'
import About from '../pages/js/About/page'



interface pageProps{}
const page: FC<pageProps>=({})=>{
    return <div>
       <About/>
      <Footer />
      </div>
} 
export default page


