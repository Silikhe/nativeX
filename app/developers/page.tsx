import { Contact, HeroDev, Join, HowTo, Faq } from '@/components'
import Image from 'next/image'

export default function Developers () {
  return (
    <main className='overflow-hidden'>
      <HeroDev />
      <Join/>
      <HowTo/>
      <Faq/>
    </main>
  )
}
