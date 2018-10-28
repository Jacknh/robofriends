import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div style={{height: '500px', border: '5px solid black', overflowY: 'scroll'}}>
      {
        robots.map(robot => {
          return (
            <Card
              id={robot.id}
              name={robot.name}
              email={robot.email}
            ></Card>
          )
        })
      }
    </div>
  )
}

export default CardList