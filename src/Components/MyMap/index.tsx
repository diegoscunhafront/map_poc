import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Polygon, GeoJSON, LayersControl, WMSTileLayer } from "react-leaflet";
import "./index.css";
// @ts-ignore
import statesData from "../../data2.json" //geojson multipolygon propriedades CAR
// @ts-ignore
import { statesData2 } from "../../data4.js" //RR minified

export default function MyMap() {

    const center = [2.957001831, -61.014924728];

    return (
        <div style={{ width: "100%", height: "100%" }}>
            {/* @ts-ignore */}
            <MapContainer center={center} zoom={14} id="map">
                <LayersControl>
                    <LayersControl.BaseLayer name="Esri" checked>
                        <TileLayer
                            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                    </LayersControl.BaseLayer>

                    {/* <LayersControl.Overlay name={"Talhão Calcinha"} key={"calcinha"}>
                        <WMSTileLayer className="classTest"
                            url="http://localhost:8080/geoserver/paia/wms"
                            params={{
                                format: "image/png",
                                layers: "paia:talhao_01",
                                transparent: true,

                            }}
                        />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name={"Região Cajueiro"} key={"cajueiro"}>
                        <WMSTileLayer className="classTest"
                            url="http://localhost:8080/geoserver/paia/wms"
                            params={{
                                format: "image/png",
                                layers: "paia:cajueiro",
                                transparent: true,

                            }}
                        />
                    </LayersControl.Overlay> */}

                    <LayersControl.Overlay name={"NDVI"} key={"ndvi"}>
                        <WMSTileLayer className="classTest"
                            url="http://localhost:8080/geoserver/paia/wms"
                            params={{
                                format: "image/png",
                                layers: "paia:ndvi_pivo_02",
                                transparent: true,

                            }}
                        />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name={"NDRE"} key={"ndre"}>
                        <WMSTileLayer className="classTest"
                            url="http://localhost:8080/geoserver/paia/wms"
                            params={{
                                format: "image/png",
                                layers: "paia:ndre_pivo_02",
                                transparent: true,

                            }}
                        />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name={"LST"} key={"lst"}>
                        <WMSTileLayer className="classTest"
                            url="http://localhost:8080/geoserver/paia/wms"
                            params={{
                                format: "image/png",
                                layers: "paia:lst",
                                transparent: true,
                            }}
                            
                        />
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name={"SICAR"} key={"sicar"}>
                        <WMSTileLayer className="classTest"
                            url="http://localhost:8080/geoserver/paia/wms"
                            params={{
                                format: "image/png",
                                layers: "paia:tb_sicar",
                                transparent: true,
                            }}

                        />
                    </LayersControl.Overlay>
                </LayersControl>

                {
                    statesData2.features.map((state: any) => {
                        const coordinates = state.geometry.coordinates[0].map((item: any) => [item[1], item[0]])

                        return (
                            <Polygon
                                pathOptions={{
                                    fillColor: "transparent",
                                    weight: 1,
                                    opacity: 1,
                                    // @ts-ignore
                                    dashArray: 5,
                                    // color: "#AADD77"
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
                <GeoJSON data={statesData2.teste} />
            </MapContainer>
        </div>
    )
}