import React from 'react';

import Modal from './Modal';


function DeleteBadgeModal(props) {
    return <Modal isOpen={props.isOpen} onClose={props.onClose} > 
    <div className="DeleteBadgeModal">
        <h1>Are you Sure?</h1>
        <p>You are about to delete this badge.</p>
        <div onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</div>
        <div onClick={props.onClose} className="btn btn-primary">Cancel</div>
    </div>
    </Modal>
}
export default DeleteBadgeModal;