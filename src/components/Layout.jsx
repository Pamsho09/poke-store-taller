import React from 'react'

const Layout = (props) => {
    return (
        <>
            <header className='w-full bg-purple-600 h-14 px-4 flex justify-start items-center'>
                <h1 className='font-bold uppercase text-white'>Poke Store</h1>
            </header>
            {
                props.children
            }
        </>
    )
}

export default Layout