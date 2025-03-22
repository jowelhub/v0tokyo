"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

interface CategoryFilterProps {
  categories: string[]
  onFilterChange: (selectedCategories: string[]) => void
}

export default function CategoryFilter({ categories, onFilterChange }: CategoryFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const toggleCategory = (category: string) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]

    setSelectedCategories(newSelectedCategories)
    onFilterChange(newSelectedCategories)
  }

  return (
    <div className="relative">
      <Button variant="outline" size="sm" className="gap-2" onClick={() => setIsOpen(!isOpen)}>
        <Filter className="h-4 w-4" />
        <span>Filters</span>
        {selectedCategories.length > 0 && (
          <span className="ml-1 rounded-full bg-primary text-primary-foreground px-2 py-0.5 text-xs">
            {selectedCategories.length}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-56 rounded-md border bg-white shadow-lg z-50">
          <div className="p-2">
            <div className="font-medium text-sm px-2 py-1.5">Categories</div>
            <div className="h-px bg-gray-200 my-1 -mx-2"></div>
            {categories.map((category) => (
              <div
                key={category}
                className="flex items-center px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => toggleCategory(category)}
              >
                <div className="w-4 h-4 mr-2 flex items-center justify-center">
                  {selectedCategories.includes(category) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
                <span className="text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
