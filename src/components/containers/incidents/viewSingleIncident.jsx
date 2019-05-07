import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import classes from './Incident.css';

const ViewCard = ({ data, type }) => {
  return (
    data &&
    data.map(val => (
      <Card key={val.id} href={`/${type}/${val.id}`} centered>
        <Image src={val.images} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{val.location}</Card.Header>
          <Card.Meta>
            <span className="date">{val.createdon.substr(0, 10)}</span>
          </Card.Meta>
          <Card.Description className={classes.Ellipsis}>
            {val.comment}
          </Card.Description>
        </Card.Content>
      </Card>
    ))
  );
};

export default ViewCard;
