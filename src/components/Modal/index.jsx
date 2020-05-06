import "./styles.css";

import PropTypes from 'prop-types'
import React from 'react'

const Modal = (props) => (
    <div className={`modal-container ${props.visible ? 'visible' : 'hidden'}`}>
        <div className={'modal'}>
            <div className={'close-modal'} onClick={props.closeModal}>×</div>
            {props.children}
        </div>
    </div>
)

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Modal