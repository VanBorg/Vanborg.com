import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { divIcon, latLngBounds, type LatLngExpression } from 'leaflet'
import { MapContainer, Marker, TileLayer, Tooltip, useMap } from 'react-leaflet'
import type { LocationPage } from '../../../data/locations'

interface LocationNetworkMapProps {
  locations: LocationPage[]
  activeSlug?: LocationPage['slug']
  className?: string
  minHeight?: number
  zoom?: number
  fitMode?: 'fixed' | 'bounds'
  maxAutoZoom?: number
}

function getMapCenter(locations: LocationPage[]): LatLngExpression {
  const fallback: LatLngExpression = [53.14, 6.84]
  if (locations.length === 0) return fallback

  const sums = locations.reduce(
    (acc, location) => {
      acc.lat += location.lat
      acc.lng += location.lng
      return acc
    },
    { lat: 0, lng: 0 }
  )

  return [sums.lat / locations.length, sums.lng / locations.length]
}

function markerIcon(isActive: boolean, isHome: boolean) {
  const className = [
    'location-map__marker',
    isActive ? 'location-map__marker--active' : '',
    isHome ? 'location-map__marker--home' : '',
  ]
    .filter(Boolean)
    .join(' ')
  return divIcon({
    className,
    html: '<span class="location-map__marker-dot" aria-hidden="true"></span>',
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  })
}

function FitBoundsController({
  locations,
  maxAutoZoom,
}: {
  locations: LocationPage[]
  maxAutoZoom: number
}) {
  const map = useMap()

  useEffect(() => {
    if (locations.length === 0) return

    const bounds = latLngBounds(locations.map((location) => [location.lat, location.lng] as [number, number]))
    map.fitBounds(bounds, {
      padding: [24, 24],
      maxZoom: maxAutoZoom,
    })
  }, [locations, map, maxAutoZoom])

  return null
}

export function LocationNetworkMap({
  locations,
  activeSlug,
  className,
  minHeight = 360,
  zoom = 11,
  fitMode = 'fixed',
  maxAutoZoom = 13,
}: LocationNetworkMapProps) {
  const navigate = useNavigate()
  const center = useMemo(() => getMapCenter(locations), [locations])

  return (
    <div className={`location-map ${className ?? ''}`} style={{ minHeight }}>
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="location-map__canvas">
        {fitMode === 'bounds' && <FitBoundsController locations={locations} maxAutoZoom={maxAutoZoom} />}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-bijdragers'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => {
          const isActive = location.slug === activeSlug
          const isHome = location.slug === 'veendam'
          return (
            <Marker
              key={location.slug}
              position={[location.lat, location.lng]}
              icon={markerIcon(isActive, isHome)}
              eventHandlers={{ click: () => navigate(`/locatie/${location.slug}`) }}
            >
              <Tooltip direction="top" offset={[0, -8]} opacity={1}>
                <span className="location-map__tooltip">
                  {location.name}
                </span>
              </Tooltip>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}
