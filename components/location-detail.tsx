"use client"

import Image from "next/image"
import type { LocationData } from "@/lib/types"
import { X } from "lucide-react"
import { getCategoryColor } from "@/lib/utils"

interface LocationDetailProps {
  location: LocationData
  onClose?: () => void
  isMobile: boolean
}

export default function LocationDetail({ location, onClose, isMobile }: LocationDetailProps) {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="sticky top-0 z-10 bg-white border-b flex items-center justify-between p-4 flex-shrink-0">
        <h2 className="text-xl font-bold">{location.title}</h2>
        {onClose && (
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="overflow-auto flex-1">
        {location.images.map((image, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${location.title} - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

        <div className="p-4">
          <p className="text-gray-700 mb-4">{location.description}</p>

          <div className="mb-4">
            <span className={`inline-block px-2 py-1 text-xs rounded-full ${getCategoryColor(location.category)}`}>
              {location.category}
            </span>
          </div>

          {location.details && (
            <div className="space-y-4 mt-6">
              {location.details.map((detail, index) => (
                <div key={index}>
                  <h3 className="font-medium text-lg mb-2">{detail.title}</h3>
                  <p className="text-gray-600">{detail.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

