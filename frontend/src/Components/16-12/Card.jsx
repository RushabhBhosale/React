import React from 'react';

const Card = ({ id, title, price, description, image, onClick }) => {
   return (
      <div key={id} className="card" onClick={() => onClick(id)}>
         <img src={image} alt={title} />
         <div className="card-body">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
         </div>
      </div>
   );
};

export default Card;
