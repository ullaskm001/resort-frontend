import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-50'>
    <div className='ml-15 pt-10'>
        <h4 className='text-2xl'>Contact us</h4>
        <hr className='mr-15' />
        <p className='text-xl'>Phone: +93 111 11 111</p>
        <p className='text-xl'>Email: resort@gmail.com</p>
        
    </div>
    <div className='flex ml-12'>
            <div>
                <a href="https://www.instagram.com/"><img src="images/instagram.png" alt="" className='h-15 w-15'/></a>
            </div>
            <div>
                <a href="http://facebook.com/"><img src="images/facebook.png" alt="" className='h-15 w-15'/></a>
            </div>
            <div>
                <a href="http://x.com/"><img src="images/twitter.png" alt="" className='h-15 w-15'/></a>
            </div>
        </div>
        </div>
  )
}

export default Footer