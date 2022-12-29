import React from 'react'
import { SocialIcon } from 'react-social-icons';
type Props = {}

export default function Header({}: Props) {
  return (
    <header>
      <div className='flex flex-row item-center'>
      <SocialIcon url="https://twitter.com/" fgColor='gray' bgColor='transparent'/>
      <SocialIcon url="https://twitter.com/" fgColor='gray' bgColor='transparent'/>
      <SocialIcon url="https://twitter.com/" fgColor='gray' bgColor='transparent'/>
      <SocialIcon url="https://twitter.com/" fgColor='gray' bgColor='transparent'/>
      </div>
<div>
<SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
<p className='uppercase'>Get In Touch</p>

</div>

    </header>
    

  )
}