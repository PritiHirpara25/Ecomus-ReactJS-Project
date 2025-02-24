import React , {useState} from 'react'
import Allinnerbanner from '../PageHelpers/Allinnerbanner'
import Footerwhite from '../Components/Footerwhite'

import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TbArrowsCross } from "react-icons/tb";

const Shop = () => {

  return (
    <div>
      <div>
        <Allinnerbanner title="New Arrival" Breadcrumbs="Shop through our latest selection of Fashion" />
      </div>

    <div>
    </div>


      <div className='mt-12'>
        <hr />
        <Footerwhite />
      </div>
    </div>
  )
}

export default Shop