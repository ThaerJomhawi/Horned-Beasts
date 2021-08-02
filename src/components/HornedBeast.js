import React from 'react';
import Card from 'react-bootstrap/Card'
class HornedBeast extends React.Component {
  state = {
    stateVotes: 0
  }

  raiseVotes = () => {
    this.setState({
      stateVotes: this.state.stateVotes + 1
    })

  }
  render() {
    const { title, imageUrl, description } = this.props;
    return (
      <Card className="mb-5" style={{ width: '18rem' }}>
        <Card.Img className="card-img" variant="top" src={imageUrl} alt={title} onClick={() => { this.raiseVotes() }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {this.state.stateVotes}
        </Card.Footer>
      </Card>
    );
  }
}
export default HornedBeast;
