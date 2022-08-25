import {BellIcon, SearchIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const {logout} = useAuth()

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
        <Link href="/account">
          Account
        </Link>
        <button className="lg:inline" onClick={logout}>Logout</button>
      </div>
    </header>
  )
}

export default Header