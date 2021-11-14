import React from 'react'
import { AiOutlinePlayCircle } from "react-icons/ai";
import logo3 from '../imgApp/package-01-150x150.jpg'
import logo4 from '../imgApp/package-02-150x150.jpg'
import logo5 from '../imgApp/package-03-150x150.jpg'
import logo6 from '../imgApp/package-04-150x150.jpg'
const Container = () => {
    return (
        <div id='containet_all'>
        <div id='container'>
            <div className='container_text' >
                <p>WALK TOUR AND SUGWAY</p>
                <h1>The Paris  <span>Experience !</span><p></p></h1>
                <div className='container_list'>
                    <p className='container_list1'>Lorem ipsum dolor sit amet, consect etur adip iscing elit. Proin rhoncus urn a dictum neque molestie ultricies.</p>
                    <p className='container_list1'>Lorem ipsum dolor sit amet, consect etur adip iscing elit. Proin rhoncus urn a dictum neque molestie ultricies.
</p>
                </div>
                <li>VIEW ALL PACKAGES</li>
                <img src={logo3} alt="" className="container_img_list-1" />
                <img src={logo4} alt="" className="container_img_list-2"/>
                <img src={logo5} alt="" className="container_img_list-3"/>
                <img src={logo6} alt="" className="container_img_list-4"/>
                <p className="container_img_list-5">700 $</p>
                <p className="container_img_list-6">500 %</p>
                <p className="container_img_list-7">400 $</p>
                <p className="container_img_list-8">1200 $</p>
            </div>
           
            <div className='container_img'> 
            <li className ="icon_img"><AiOutlinePlayCircle className ="icon_img2"/></li>
            </div>
           


           
        </div>
        {/* <div className='container_img-list'>
          <div><a href="" className = 'container_img-1'></a></div>
          <div><a href="" className = 'container_img-2'></a></div>
          <div><a href="" className = 'container_img-3'></a></div>
          <div><a href="" className = 'container_img-4'></a></div>
        </div> */}
      
        </div>

    )
}

export default Container
