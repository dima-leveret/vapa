import React from "react";
import '../home/Home.css';

import Partners from "../partners/Partners";
import NavProducts from '../navigation/NavProducts'
import AddProduct from '../products/AddProduct';
import Products from '../products/Products';
import Slider from '../slider/Slider'


class Home extends React.Component {


    render (){
        return ( <>
            <div className="bobyContainer" >
                <div className='cardContainer' >
                    <Slider/>
                    <NavProducts/>
                    <Products/>
                    {/* <AddProduct /> */}
                </div>
            </div>
            {/* <Partners/> */}
            </>
        )
    }

} 

export default Home;