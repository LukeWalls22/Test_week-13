import React from 'react';
import { Card } from 'react-bootstrap';

export default function MyFooter() {
  return (
    <Card className="myfooter p-0 mt-5">
      <Card.Header>JustPosted</Card.Header>
      <Card.Body>
        <Card.Title>App lettura post da Wordpress</Card.Title>
        <Card.Text>
          Test settimanale di Luca Di Muro
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
