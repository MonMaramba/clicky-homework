import React from 'react';
import "./cards.css";

const Cards = props => (
    <div
    className="allCards col-xs-6 col-sm-6 col-md col-lg-3 col-xl-3"
    key={props.id}
    onClick={() => props.handleClick(props.id, props.clicked)}>
        <img
        id={props.name}
        src={props.image}
        alt={props.name}
        />    
    </div>
)

export default Cards;