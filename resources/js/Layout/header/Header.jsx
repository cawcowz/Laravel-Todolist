import React from 'react'
import NavigationItems from './NavigationItems'
import Logo from './Logo'
import Footer from '../footer/Footer'

function Header({children}) {
  return (
    <div>
        <div>
            {/* <Logo /> */}
            <NavigationItems />
        </div>

        <main className='mt-2'>
            {children}
        </main>

        <Footer/>
    </div>
  )
}

export default Header