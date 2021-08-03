import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json'
import { Container, Col, Row } from 'react-bootstrap'
class Main extends React.Component {
  render() {
    return (
      <main>
        <Container fluid>
          <Row >
            {
              data.map((item, index) => (
                <Col>
                  <HornedBeast
                    title={item.title}
                    imageUrl={item.image_url}
                    description={item.description}
                     />
                </Col>
              ))
            };
          </Row>
        </Container>
      </main>


    )
  }
}

export default Main;
