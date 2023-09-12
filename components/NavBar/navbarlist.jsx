import Link from 'next/link'
import React from 'react'

const NavbarList = () => {

    
  const navlinks=[
    {id:1,link:'/',name:'Home'},
    {id:2,link:'/blog',name:'Blog'},
    {id:3,link:'/explore',name:'Explore Nature'},
    {id:4,link:'/gallery',name:'Gallery'},
    {id:5,link:'/shop',name:'Our products'},
    {id:6,link:'/contact',name:'Contact us'},
  ]

  return (
    <>
    {navlinks.map(({id,link,name})=>(
        <div className='border'>
            <Link className='border' key={id} href={link}>{name}</Link>
        </div>
    ))}
    </>
  )
}

export default NavbarList