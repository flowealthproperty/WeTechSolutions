import React from 'react'
import {BsPlayCircle} from "react-icons/bs"
import { Container } from '../Containers'
import Youtube from '../Youtube' 
import { Title } from "../title" 
 import { ExtraLogos } from '../ExtraLogos'
import Button from '../Button'
import { BackgroundDesign } from '../backgroundDesign'
import PhoneFrame from '../Phoneframe'
import AppFeature from '../AppFeature'
const Herosection = () => {
  return (
    <section id="Home" className="overflow-hidden">
    <Container>
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
    {/*Right */}
    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
     <Title title="Digital Marketing Expertise" className="text-5xl"/>
     <p className="mt-6 text-lg text-gray-600">
       We can help you develop and execute digital marketing solutions that deliver real results
     </p>
     <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-4">
      <Youtube className="w-32 h-auto"/>  
        <Button variant="outline" href="https://youtu.be/vv1fia-stqk">
        <BsPlayCircle/>
        <span className="ml-2.5"> 
          watch the video
        </span>
       </Button>
     </div>
     </div>
     {/*Left */}
     <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
     <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
        <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
        <PhoneFrame className="max-w-[366px] mx-auto">
             <AppFeature/>
         </PhoneFrame>        
        </div>
     </div>
     <ExtraLogos/>
    </div>
    </Container>
  </section>
  )
}

export default Herosection
