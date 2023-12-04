import Image from "next/image"
import Link from "next/link"
import banner from "../assets/PSX_20231204_155344.jpg"
export const Bannered = ({className, props}) => {
    return (
      <Link href={"/"}>
      <div>
      <Image 
      src={banner}
      width={100}
       height={10}
       className="bg-white w-[400px] z-[1000px]"
      />
      </div>
      </Link>
    )
  }