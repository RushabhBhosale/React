import React from 'react'

const PropMaps = ({lame, myAge, myStudents, ChangeName}) => {
  return (
    <div>
      <ul>
         {myStudents.map((student) => (
            <p>{student}</p>
         ))}
      </ul>
      <h1>{lame}</h1>
      <button onClick={ChangeName}>Change Name</button>
    </div>
  )
}

export default PropMaps