import React from 'react';
import '../../App.css';
import Inputs from '../Inputs.js'; 
import MapContainer from '../MapContainer'

export default function Service() {
  return (
		 <>
  		<div className="content-wrap">
		<Inputs />
		
		<MapContainer />
		</div>

		</>
	  
  )
}
