import { useState, useEffect } from 'react'

const useMediaQuery = () => {
   const [isDesktop, setIsDesktop] = useState(false)
   const [isMobile, setIsMobile] = useState(false)

   useEffect(() => {
      const media = window.matchMedia('(min-width: 768px)')
      const checkSize = () => {
         if (media.matches) {
            setIsMobile(false)
            setIsDesktop(true)
         } else {
            setIsMobile(true)
            setIsDesktop(false)
         }
      }
      checkSize()
      window.addEventListener('resize', checkSize)
      return () => window.removeEventListener('resize', checkSize)
   }, [isDesktop, isMobile])

   return { isDesktop, isMobile }
}

export default useMediaQuery
