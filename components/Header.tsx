import {BellIcon, SearchIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
  }, [])
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
      <img
          src="https://bemaster.com/wp-content/uploads/2022/03/Logo-05.png"
          width={200}
          height={200}
          className="cursor-pointer object-contain"
        />
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm h-6 w-6 sm:inline" />
        <BellIcon className="hidden lg:inline h-6 w-6" />
        <p className="hidden lg:inline">My List</p>
        <Link href="/account">
          Account
        </Link>
      </div>
    </header>
  )
}

export default Header