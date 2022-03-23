import Image from "next/image"
import HeaderItem from "./HeaderItem"

import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
  } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        

        <div className="flex flex-grow justify-evenly max-w-2xl ">
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
            <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
            <HeaderItem title="SEARCH" Icon={SearchIcon} />
            <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>

        <img 
            className="object-contain"
            src='https://hulu-clone-2-0.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fua6&w=640&q=75' 
            alt="hulu_logo"
            width={200}
            height={100}    
        />
    </header>
  )
}

export default Header