import React from 'react'
import StyledComponents from './StyledComponents';

const MapObjects = ({ myStudentsData }) => {

  return (
    <div>
      {myStudentsData.map((studentdata) => 
         <div>
            <img src={studentdata.image} />
            <h1>{studentdata.name}</h1>
            <h4>{studentdata.age}</h4>
         </div>
      )}
    </div>
  )
}

export default MapObjects;