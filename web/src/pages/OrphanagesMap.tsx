import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';
import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap() {
  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMarkerImg} alt='Happy' />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Teresina</strong>
          <span>Piauí</span>
        </footer>
      </aside>
      <div></div>
      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color='#fff' />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
