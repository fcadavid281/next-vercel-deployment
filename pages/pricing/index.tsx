
import { MainLayout } from '../../Components/layouts/MainLayout';
import Link from 'next/link'
import React from 'react'

const PricingPage =() => {
  return (
    <>
      <MainLayout>
           <h1>
               Ir a 
               <Link style={{
                    color:'blueviolet',
                    textDecoration:'underline'
               }}
                 href='/' 
               >Home</Link>
           </h1>
           <p>
              What is your name, 
              Nephew 
              niece
              father, Mother, sister , siblings , nephew, niece
              mom, mommy , mother, father, dad , daddy
              Miss, fridge, kitchen, under, over, in front of,
              the chair in front of the desk, 
              Very day , I study every day English   
              See you later, Where is you from? How much 
            </p>     

            <p className={'description'}>
              Get Started by editing {' '}
              <code>
                Page/pricing/index.jsx
              </code>
            </p>

      </MainLayout>
    </>
  )
}

export default PricingPage;


