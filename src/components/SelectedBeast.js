import React from 'react';
import { Modal } from 'react-bootstrap/';

class SelectedBeast extends React.Component {
    render() {
        const { title, imageUrl, description, handleClose, show } = this.props;
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='imgModal' src={imageUrl} alt={title}
                     style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'}}
                        />
                </Modal.Body>
                <Modal.Footer>{description}</Modal.Footer>
            </Modal>
        );
    }
}
export default SelectedBeast;
