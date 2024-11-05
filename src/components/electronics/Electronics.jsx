import React, { useState, useEffect } from 'react'
import './Electronics.css'

import { electronicService } from '../../service/electronic/ElectronicService'
import ElectronicComponent from './ElectronicComponent'

function Electronics() {
    const [electronicProducts, setElectronicProducts] = useState([]);


    useEffect(()=>{
        getEletronicsData();
    }, [])

    const getEletronicsData =  () => {
        const electronicsData =  electronicService();
        electronicsData.then((res) => {
            console.log(res);
            setElectronicProducts(res.data)
        }).catch((error) => {
                console.log(error);
            })
        console.log(electronicsData);

    }
    return (
        <>
            <div className="electronic-container">
                <h1>Electronics Component</h1>
                <div>
                    <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Old_Electronics_hero_1.width-1200.format-webp.webp"  width={1000} height={300} alt="" />
                </div>
                <p> Cleaning out a drawer or closet can be extremely therapeutic. Old clothes and items go into a donation pile; other things might be great to give away. But then… you pull open that drawer full of your old electronics: phones, speakers, music players and more. What do you do with these?

As electronics get smaller and more ubiquitous, more devices are hibernating in drawers, closets, attics and garages. Recycling electronics isn’t an everyday activity and doesn’t follow the same process as recycling normal household waste. In 2019, only about 17% of electronic waste was recycled globally.</p>

                {/* <button onClick={getEletronicsData} className='btn btn-outline-primary'>Get Electronics</button> */}

                {/* { electronicProducts.length > 0 && <div> 101 </div>} */}

                {
            electronicProducts.length > 0 ? (
            <div className='d-flex flex-wrap gap-1 justify-content-evenly'> 
               {
                electronicProducts.map((product)=>{
                    return  <ElectronicComponent product={product}/>
                })
               }
            </div> 
        ): <div> <h2>no data</h2></div>
                }
            </div>
        </>

    )
}

export default Electronics

// class: 22. sep 10th