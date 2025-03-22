"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { useMediaQuery } from "@/hooks/use-media-query"
import type { LocationData } from "@/lib/types"
import { locations } from "@/lib/data"
import CategoryFilter from "@/components/category-filter"
import ViewToggle from "@/components/view-toggle"
import LocationDetail from "@/components/location-detail"
import ListView from "@/components/list-view"
import EmptyState from "@/components/empty-state"
import Header from "@/components/layout/header"

// Dynamically import the MapView component to avoid SSR issues with Leaflet
const MapView = dynamic(() => import("@/components/map-view"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-100 flex items-center justify-center">Loading map...</div>,
})

const categories = ["Nature", "Shrine", "Activity", "Food", "Shopping"]

export default function ExplorePage() {
  const [view, setView] = useState<"map" | "list">("map")
  const [filteredLocations, setFilteredLocations] = useState<LocationData[]>(locations)
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const handleFilterChange = (selectedCategories: string[]) => {
    if (selectedCategories.length === 0) {
      setFilteredLocations(locations)
    } else {
      setFilteredLocations(
        locations.filter((location) =>
          selectedCategories.some((category) => {
            const categoryLower = category.toLowerCase()
            const locationCategoryLower = location.category.toLowerCase()
            const singularCategory = categoryLower.endsWith("s") ? categoryLower.slice(0, -1) : categoryLower
            return locationCategoryLower === categoryLower || locationCategoryLower === singularCategory
          }),
        ),
      )
    }
  }

  const handleLocationSelect = (location: LocationData) => {
    setSelectedLocation(location)
  }

  const handleCloseDetail = () => {
    setSelectedLocation(null)
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Blog/Detail View */}
        <div
          className={`${isMobile && !selectedLocation ? "hidden" : "flex"} flex-col w-full md:w-1/2 border-r overflow-hidden`}
        >
          {selectedLocation ? (
            <LocationDetail
              location={selectedLocation}
              onClose={isMobile ? handleCloseDetail : undefined}
              isMobile={isMobile}
            />
          ) : (
            <EmptyState />
          )}
        </div>

        {/* Right Side - Map/List View */}
        <div
          className={`${isMobile && selectedLocation ? "hidden" : "flex"} flex-col w-full md:w-1/2 h-full overflow-hidden`}
        >
          {/* Controls Bar */}
          <div className="border-b flex-shrink-0 p-2 flex items-center justify-between">
            <CategoryFilter categories={categories} onFilterChange={handleFilterChange} />
            <ViewToggle view={view} onViewChange={setView} />
          </div>

          {/* Map or List */}
          <div className="flex-1 relative overflow-hidden">
            {view === "map" ? (
              <MapView
                locations={filteredLocations}
                onLocationSelect={handleLocationSelect}
                selectedLocation={selectedLocation}
              />
            ) : (
              <ListView
                locations={filteredLocations}
                onLocationSelect={handleLocationSelect}
                selectedLocation={selectedLocation}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
