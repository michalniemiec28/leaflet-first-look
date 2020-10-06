import React from 'react'
import { Map, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const MapComponent = () => {
	const position = {
		lat: 50.049939,
		lng: 22.040166,
		zoom: 16,
	}
	return (
		<Map
			center={[position.lat, position.lng]}
			zoom={position.zoom}
			style={{ width: '100vw', height: '100vh' }}
		>
			<TileLayer
				attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<CircleMarker
				center={[position.lat, position.lng]}
				radius={10}
			>
				<Popup keepInView>
					<img style={{ width: '200px' }} src="https://billennium.com/wp-content/uploads/2019/08/BillenniumSquad_stickers_text-Copy-18.png" alt="billennium-squad" />
				</Popup>
			</CircleMarker>
		</Map>
	)
}

export default MapComponent
