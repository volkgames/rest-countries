import { ModeToggle } from '@/components/ui/mode-toggle'
import React from 'react'

export default function Header() {
  return (
    <header
        className={
          "flex items-center justify-between py-2 md:p-5 px-2 md:px-10 text-foreground bg-primary shadow-md"
        }
      >
        <h1 className={"font-extrabold text-sm md:text-2xl"}>Where in the world?</h1>
        <ModeToggle />
      </header>
  )
}
