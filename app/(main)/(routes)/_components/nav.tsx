"use client"

import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
    
import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import React from 'react'

interface navProps {
    search: string,
    onSearchChange: (newValue: string) => void,
    filter: string,
    onFilterChange: (newValue: string) => void
}

export default function Nav({search, onSearchChange, onFilterChange, filter} : navProps) {
  return (
    <nav className="flex flex-col items-center justify-between gap-3 lg:flex-row mt-7">
          <div className="flex items-center justify-center px-5 py-2 rounded-md shadow-xl dark:bg-primary">
            <label htmlFor="search">
              <SearchIcon />
            </label>
            <Input
              id="search"
              placeholder="Search for a countty"
              className="border-none outline-none bg-primary focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
              size={50}
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <Select onValueChange={onFilterChange} defaultValue={filter}>
            <SelectTrigger className='w-[12rem] bg-primary text-foreground'>
                <SelectValue placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent className="border-none bg-primary">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="africa">Africa</SelectItem>
                <SelectItem value="america">America</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="oceania">Oceania</SelectItem>
            </SelectContent>
          </Select>
        </nav>
  )
}
