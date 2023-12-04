"use client"
import React from 'react'
import { Container } from '../Containers'
import { Logo } from '../Logo'
import { NavLinks } from './NavLinks'
import Button from '../Button'
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Popover } from '@headlessui/react';
import {TbMenu2} from "react-icons/tb";
import {IoIosArrowUp} from "react-icons/io";
import { navData } from '@/constants'
 const MobileNavlnks = ({children,...props})=>{
  return(
   <Popover.Button as={Link} className="block text-base leading-7 tracking-tight text-gray-700"{...props}>
     {children}
   </Popover.Button>
  )
}
const Header = () => {
  return (
    <header className="">
      <nav className='mx-auto max-w-1xl'>
       <Container className=" relative z-50 flex justify-between">
       {/*logo */}
       <div className=' relative z-10'>
          <Logo/>
       </div>
        {/*Navlinks */}
        <div className='hidden lg:flex lg:gap-10 items-center'>
         <NavLinks/>
       </div>
       {/*Button */}
       <div className=' flex items-center gap-6'>
          <Button href="#" variant="outline" className="hidden lg:block">
          Get Started
          </Button>
          <Button>
          ContactUs
          </Button>
           {/*Moble navlinks*/}
           <Popover className="lg:hidden">
              {({open})=>(
               <>
                 <Popover.Button className="relative outline-none border-none z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus-outline-none outlne-none"
                 aria-label='Toggle site navigation'> 
                   {({open}) => open ? (<IoIosArrowUp className='text-2xl'/>
                   ):(
                     <TbMenu2 className='text-2xl'/>
                  )}
                 </Popover.Button>
                 <AnimatePresence inital={false}>
                   {open &&(
                     <>
                       <Popover.Overlay static as={motion.div}
                       initial={{opacity:0}}
                       animate={{opacity:1}}
                       exit={{opacity:0}}
                       className="fixed inset-0 z-0 bg-gray-300/60 backdrop::blue"
                       />
                       <Popover.Panel static as={motion.div}
                       initial={{ opacity:0, y: -32}}
                       animate={{opacity:1, y:0}}
                       exit={{
                        opacity:0,
                        y:-32,
                        transition: {duration:0.2},
                       }}
                       className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                       >
                     <div className="space-y-4">
                       {navData.map(({_id,title,href})=>(
                      <MobileNavlnks key={_id} href={href}>
                      {title}
                      </MobileNavlnks>
                   ))}
                     </div>
                     <div className='mt-8 flex flex-col gap-4'>
                     <Button href="#"
                      variant="outline" 
                       >
                     Get Started
                     </Button>
                     <Button>
                    ContactUs
                     </Button>
                     </div>
                       </Popover.Panel>
                     </>
                   )}
                 </AnimatePresence>
               </>
              )}
           </Popover>
          </div>
      </Container>
      </nav>
    </header>
  )
}

export default Header
