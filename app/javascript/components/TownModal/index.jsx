/**
 *
 * TownModal
 *
 */

import { Button } from 'antd';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { submitTownAction } from './actions';

const TownModal = ({
  isLoading,
  errorMessage,
  townData,
  submitTown,
  onAfterClose
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [displayName, setDisplayName] = useState('test');
  const [description, setDescription] = useState('test');
  const [url, setUrl] = useState('test');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission
    submitTown({ display_name: displayName, description, url });
    // Reset form fields
    setDisplayName('');
    setDescription('');
    setUrl('');
    // Close modal
    closeModal();
  };

  return <>
    <Button onClick={openModal}>
      <span>Add</span>
    </Button>
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      onAfterClose={onAfterClose}
      contentLabel="Form Modal"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
          <br />
          <label>
            URL:
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <br />
          <label>
            Descrição:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </ReactModal>
  </>
}

TownModal.propTypes = {};

const mapStateToProps = ({ townModalReducer } /* state */) => ({
  isLoading: townModalReducer.isLoading,
  errorMessage: townModalReducer.errorMessage,
  townData: townModalReducer.townData,
});
const mapDispatchToProps = dispatch => ({
  submitTown: (formData) => dispatch(submitTownAction(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(TownModal);