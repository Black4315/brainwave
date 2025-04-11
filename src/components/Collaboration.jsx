import React from 'react'
import Section from './reuseable/Section'
import { collabApps, collabContent, collabText } from '../constants'
import { brainwaveSymbol, check } from '../assets'
import Button from './reuseable/Button'
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
        <div className='container lg:flex'>
            <div className='max-w-[25rem]'>
                <h2 className="h2 mb-4 md:mb-8">
                    AI Chat App for seamless collaboration
                </h2>

                <ul className='max-w-[22rem] mb-10 md:mb-14'>
                    {collabContent.map((item)=>(
                        <li key={item.id} className='mb-3 py-3'>
                            <div className='flex items-center'>
                                <img src={check} width={24} height={24} alt="check" />
                                <h6 className='body-2 ml-5'>{item.title}</h6>
                            </div>
                            {item.text &&<p className='body-2 mt-3 text-n-4'>{item.text}</p>}
                        </li> 
                    ))}
                </ul>

                <Button>Try it now</Button>
            </div>

            <div className='lg:ml-auto xl:w-[38rem] mt-4'>
                <p className='body-2 md:mb-16 lg:mx-auto text-n-4 mb-8 lg:w-[22rem] lg:mb-32 '>
                    {collabText}
                </p>

                <div className='relative left-1/2 flex aspect-square 
                                border border-n-6 rounded-full w-[22rem] 
                                -translate-x-1/2 scale-75 md:scale-100'>
                    <div className='flex aspect-square w-60 border m-auto border-n-6 rounded-full'>
                        <div className='aspect-square w-[6rem] p-[0.2rem] m-auto bg-conic-gradient rounded-full'>
                            <div className='bg-n-8 w-full h-full flex-center rounded-full'>
                                <img
                                    src={brainwaveSymbol}
                                    width={48}
                                    height={48}
                                    alt="brainwave"
                                />
                            </div>
                        </div>
                    </div>
                    <ul>
                        {collabApps.map((app, index) => (
                            <li key={index} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] rotate-${index*45} origin-bottom`}>
                                <div className={`relative -top-[1.6rem] aspect-square w-[3.2rem] flex
                                             bg-n-7 rounded-xl border border-n-1/15 -rotate-${index*45}`}>
                      
                                    <img
                                        className="m-auto"
                                        width={app.width}
                                        height={app.height}
                                        alt={app.title}
                                        src={app.icon}
                                    />
                                </div>
                            </li>
                        ))}

                    </ul>

                    <LeftCurve  />   
                    <RightCurve />
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Collaboration
