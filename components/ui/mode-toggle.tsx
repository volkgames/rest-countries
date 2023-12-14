"use client"

import * as React from "react"
import { Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()


  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button onClick={toggleTheme} className="flex items-center justify-center gap-3 text-sm md:text-md text-foreground" size={"lg"}>
      <Moon fill="white" />
      Dark Mode
    </Button>
  )
}
