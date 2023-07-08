'use client'

import { useCallback, useRef, ReactNode } from "react"
import { useRouter } from "next/router"
import Image from "next/image"


const Modal = ({children}: {children:ReactNode}) => {
  return (
    <div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Modal