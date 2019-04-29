import _ from 'lodash'
import React from 'react';
import { Container, Card } from 'semantic-ui-react'
import classes from './incident.css';

const cards = 
  {
    date: '2013',
    header: 'Lagos',
    description: 'A redflag',
  }

const Incident = () => {
    return (
      <div>
        <Container>
          <Card.Group>
            <Card fluid centered header="hello" />
          </Card.Group>
        </Container>
      </div>
    )
}

export default Incident;