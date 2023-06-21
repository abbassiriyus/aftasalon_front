import { FC } from "react"
import React from 'react'
import Search from '../pages/js/Search'
import Footer from '../pages/js/Footer'
import About from '../pages/js/About/page'
import Contact from '../pages/js/Contact'


interface pageProps{}
const page: FC<pageProps>=({})=>{
    return <div> <Search/>
      <Footer /></div>
} 
export default page


