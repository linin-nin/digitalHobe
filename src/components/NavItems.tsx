"use client"

import { PRODUCT_CATEGORIES } from '@/config'
import React, { useEffect, useRef, useState } from 'react'
import NavItem from './NavItem'
import { useOnClickOutside } from '@/hook/use-on-click-outside'

const NavItems = () => {

const [ActiveIndex, setActiveIndex] = useState<number | null>(null)
const isAnyOpen = ActiveIndex !== null
const navRef = useRef<HTMLDivElement | null>(null)

useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null)
      }
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

useOnClickOutside(navRef, () => setActiveIndex(null))

  return (
    <div className='flex gap-4 h-full' ref={navRef}>
        {PRODUCT_CATEGORIES.map((category, i) => {

            const handleOpen = () => {
                if(ActiveIndex === i) {
                    setActiveIndex(null)
                }else {
                    setActiveIndex(i)
                }
            }
            const isOpen = i === ActiveIndex

            return(
                <NavItem category={category} handleIOpen={handleOpen} isOpen={isOpen} key={category.value} isActive={isAnyOpen}/>
            )
        })}
    </div>
  )
}

export default NavItems