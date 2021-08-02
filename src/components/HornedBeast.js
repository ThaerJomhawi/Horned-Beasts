import React from 'react';

class HornedBeast extends React.Component {
  render() {
    const { title, imageUrl, description} = this.props;
    return (

      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
        <p>{description}</p>
      </div>

    );
  }
}
export default HornedBeast;
