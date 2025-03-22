"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import type { LocationData } from "@/lib/types"

// Fix for Leaflet marker icons in Next.js
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

interface MapViewProps {
  locations: LocationData[]
  onLocationSelect: (location: LocationData) => void
  selectedLocation: LocationData | null
}

function MapController({ selectedLocation }: { selectedLocation: LocationData | null }) {
  const map = useMap()

  useEffect(() => {
    if (selectedLocation) {
      // Center the map on the selected location without changing zoom level
      map.panTo([selectedLocation.lat, selectedLocation.lng])
    }
  }, [selectedLocation, map])

  return null
}

export default function MapView({ locations, onLocationSelect, selectedLocation }: MapViewProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-full w-full bg-gray-100 flex items-center justify-center">Loading map...</div>
  }

  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={[35.6762, 139.6503]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={markerIcon}
            eventHandlers={{
              click: () => onLocationSelect(location),
            }}
          >
            <Tooltip direction="top" offset={[0, -20]} opacity={0.9}>
              <div className="font-medium">{location.title}</div>
            </Tooltip>
          </Marker>
        ))}
        <MapController selectedLocation={selectedLocation} />
      </MapContainer>
    </div>
  )
}

