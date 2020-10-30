import React from 'react';
import { FiPlus } from 'react-icons/fi';
import marker from '../images/marker.svg';
import { Link } from 'react-router-dom';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
    iconUrl: marker,
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor: [170,2], 
});

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={marker} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita ;)</p>
                </header>
                <footer>
                    <strong>Presidente Prudente</strong>
                    <strong>São Paulo</strong>
                </footer>
            </aside>

            <Map 
                center={[-22.1502451,-51.3994681]}
                zoom={14}
                style={{width:'100%', height:'100%'}}
            >
               {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>     */}
               <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                
                <Marker icon={mapIcon} position={[-22.1502451,-51.3994681]}>
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar dos Meninos
                    </Popup>
                </Marker>
            </Map>    

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;