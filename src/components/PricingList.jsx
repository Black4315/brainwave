import React from 'react'
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./reuseable/Button";

const PricingList = () => {
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap'>
       {pricing.map((item) => (
            <div
                key={item.id}
                className='w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14  odd:py-8 odd:my-6 '
            
            >
                <h4 className={`h4 mb-4 ${item.id == 0 ? 'text-color-2':(item.id==1?'text-color-1':'text-color-3')}`}>{item.title}</h4>
                <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>
                <div className='flex items-center h-[5.5rem] mb-6'>
                    {item.price && <>
                        <h3 className="h3">$</h3>
                        <div className='text-[5.5rem] leading-none font-bold'>{item.price}</div>
                    </>}
                </div>

                <Button 
                    className="w-full mb-6"
                    href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
                    white={!!item.price}
                
                >
                    {item.price?'Get Started':'Contact Us'}
                </Button>
                <ul>
                    {item.features.map((feature, index) => (
                        <li key={index} className={`border-t border-n-6 flex py-6 items-start`}>
                            <img src={check} width={24} height={24} alt="Check" />
                            <p className="body-2 ml-4">{feature}</p>
                        </li>
                    ))}
                </ul>
            </div>

       ))}
    </div>
  )
}

export default PricingList
