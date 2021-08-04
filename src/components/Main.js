import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import { Container, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hornfilter: data
    }
  }


  handleChange = (e) => {



    if (e.target.value === 'all') {
      this.setState({
        hornfilter: data
      })

    }
    else {
     
  
    this.setState({
      hornfilter: data.filter((num) => num.horns === +e.target.value )
    })
    }



}
render() {

  return (
    <main>

      <Container>
        <Form.Control as="select" defaultValue="all" onChange={(e) => this.handleChange(e)}>
          <option value="all"> No filter</option>
          <option value="1"> (1) Horn</option>
          <option value="2"> (2) Horns</option>
          <option value="3"> (3) Horns</option>
          <option value="100"> (100) Horns</option>
        </Form.Control>
      </Container>

      <Container fluid>
        <Row >
          {
            this.state.hornfilter.map((item, index) => (
              <Col>
                <HornedBeast
                  title={item.title}
                  imageUrl={item.image_url}
                  description={item.description}
                  horns={item.horns}
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
