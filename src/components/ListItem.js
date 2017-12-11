import React from 'react';
import '../App.css';
import { Row, Col } from 'react-bootstrap';

const ListItem = ({ video, thumbnail, title, channelTitle, onVideoSelect }) => {
  let newTitle = title;
  if (title.length > 50) {
    newTitle = title.slice(0, 50)
  }

  return (
    <div className="ListItem" onClick={() => onVideoSelect(video)}>
      <Row className="show-grid">
        <Col xspull={3} mdpull={3}>
          <img src={thumbnail.url} alt=""/>
        </Col>
        <Col xspush={3} mdpush={3}>
          <strong>
            {newTitle}
          </strong>
          <p>
            {channelTitle}
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default ListItem;
