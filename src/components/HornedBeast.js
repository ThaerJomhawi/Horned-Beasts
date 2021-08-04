import React from 'react';
import Card from 'react-bootstrap/Card'
import SelectedBeast from './SelectedBeast';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateVotes: 0
    }
  };
  raiseVotes = () => {
    this.setState({
      stateVotes: this.state.stateVotes + 1
    })
  };

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { title, imageUrl, description, horn } = this.props;
    return (
      <div>
        <Card className="mb-5" style={{ width: '18rem' }}>
          <Card.Img className="card-img" variant="top" src={imageUrl} alt={title} onClick={this.handleShow} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <span className='votebutton' onClick={() => { this.raiseVotes() }} >💜       </span>
            {this.state.stateVotes}
          </Card.Footer>
        </Card>

        <SelectedBeast
          title={title}
          imageUrl={imageUrl}
          description={description}
          horn={horn}
          handleClose={this.handleClose}
          show={this.state.showModal}
        />
      </div>
    );
  }
}
export default HornedBeast;
