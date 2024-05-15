import "leaflet/dist/leaflet.css"
import { MapContainer, Popup, TileLayer, Marker, Polygon, GeoJSON, LayersControl } from "react-leaflet";
import "./index.css";
import { Icon, divIcon, point } from "leaflet"
import MarkerClusterGroup from "react-leaflet-cluster"
// @ts-ignore
import statesData from "../../data2.json" //geojson multipolygon propriedades CAR
// @ts-ignore
import { statesData2 } from "../../data4.js" //RR minified
import marker from "../../Assets/alerta.png"
import pin from "../../Assets/pino-de-localizacao.png"

export default function MyMap() {

    const center = [-3.10719, -60.0261];
    
    // const markers = [
    //     {
    //         geocode: [1.53502694, -60.67424528],
    //         popUp: "Propriedade Sr. Mariano - CAR N123"
    //     },
    //     {
    //         geocode: [1.796409747 , -61.126576368],
    //         popUp: "Propriedade Sr. Jorge - CAR N345"
    //     },
    //     {
    //         geocode: [1.630487492 , -60.392562714],
    //         popUp: "Propriedade Sr. Marco - CAR N567"
    //     }
    // ];

    const createCustomClusterPin = (cluster: any) => {
        // @ts-ignore
        return new divIcon({
            html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
            className: 'custom-marker-cluster',
            iconSize: point(33, 33, true)
        });
    }

    const createCustomClusterMarker = (cluster: any) => {
        // @ts-ignore
        return new divIcon({
            html: `<div class="cluster-icon2">${cluster.getChildCount()}</div>`,
            className: 'custom-marker-cluster',
            iconSize: point(33, 33, true)
        });
    }

    const customMarker = new Icon({
        iconSize: [78, 78], iconUrl: marker
    })
    const customPin = new Icon({
        iconSize: [78, 78], iconUrl: pin
    })

    return(
        <div style={{ width: "75%", height: "100%"}}>
            {/* @ts-ignore */}
            <MapContainer center={center} zoom={6} id="map">
                <LayersControl>
                    <LayersControl.BaseLayer checked name="OSM">
                        <TileLayer
                            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Stadia" >
                        <TileLayer
                            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Esri">
                        <TileLayer
                            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Maptiler">
                        <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=VIaEDg7lTTVI6QmXL0LO"
                            //@ts-ignore
                            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>
                
                <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createCustomClusterPin}
                >
                    {
                        statesData.teste.map((item: any) => !item.alerta ? <Marker position={[item.coordinates[0][0][0][1], item.coordinates[0][0][0][0]]} icon={customPin}>
                            <Popup>Propriedade CAR N: xxx sem alertas para exibir!</Popup>
                        </Marker> : null)
                    }

                </MarkerClusterGroup>
                <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createCustomClusterMarker}
                >
                    {
                        // statesData.teste.map((item: any) => (
                        //     <Marker position={[item.coordinates[0][0][0][1], item.coordinates[0][0][0][0]]} icon={customMarker}>
                        //         <Popup>Propriedade CAR N: xxx com alertas!</Popup>
                        //     </Marker>
                        // ))
                        statesData.teste.map((item: any) => item.alerta ? <Marker position={[item.coordinates[0][0][0][1], item.coordinates[0][0][0][0]]} icon={customMarker}>
                            <Popup>Propriedade CAR N: xxx com alertas!</Popup>
                        </Marker> : null)
                    }
                </MarkerClusterGroup>
                {
                    statesData2.features.map((state: any) => {
                        const coordinates = state.geometry.coordinates[0].map((item: any) => [item[1], item[0]])

                        return (
                            <Polygon
                                pathOptions={{
                                    fillColor: "#00FF00",
                                    fillOpacity: 0.7,
                                    weight: 2,
                                    opacity: 1,
                                    // @ts-ignore
                                    dashArray: 3,
                                    color: "white"
                                }}
                                positions={coordinates}
                                eventHandlers={{
                                    // mouseover: (e) => {
                                    //     const layer = e.target;
                                    //     layer.setStyle({
                                    //         fillOpacity: 0.7,
                                    //         weight: 5,
                                    //         dashArray: "",
                                    //         color: "#777",
                                    //         fillColor: "#DDD"
                                    //     })
                                    // },
                                    // mouseout: (e) => {
                                    //     const layer = e.target;
                                    //     layer.setStyle({
                                    //         fillOpacity: 0.7,
                                    //         weight: 2,
                                    //         dashArray: "3",
                                    //         color: "white",
                                    //         fillColor: "#FD8D3C"
                                    //     })
                                    // },
                                }}
                            />
                        )
                    })
                }
                {/* @ts-ignore */}
                <GeoJSON data={statesData.teste} />
            </MapContainer>
        </div>
   ) 
}