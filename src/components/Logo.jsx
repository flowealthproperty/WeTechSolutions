import clsx from 'clsx'
import Link from 'next/link'
 import Image from 'next/image'
 import logo from "../assets/SGN_12_04_2023_1701696983812.png"
export const Logo = ({className, props}) => {
  return (
    <Link href={"/"}>
    <div>
    <Image 
    src={logo}
    width={100}
     height={10}
    />
    </div>
    </Link>
  )
}
