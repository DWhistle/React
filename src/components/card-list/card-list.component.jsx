import React from 'react';
import './cart-list.style.css';
import {Card} from '../card/card.component'

export const CardList = props => {
    return (<div className='card-list'>
            {
                props.monsters.map(
                    monster => (<Card key={monster.id} monster={monster} />))
            }
        </div>
    );
}
