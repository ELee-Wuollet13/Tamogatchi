import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';
import { Dropdown } from 'react-bootstrap';

function NewPetForm(props){
  let _name = null;

  function handleNewPetFormSubmission(event) {
    event.preventDefault();
    props.onNewPetCreation({name: _name.value, id: v4, timeOpen: new Moment()});
    _name.value = '';

  }

  return (
    <div>
    <form style={{margin: "10px", position: "relative", zIndex: "550"}}onSubmit={handleNewPetFormSubmission}>
    <input
    type='text'
    id='name'
    placeholder='Name'
    ref={(input) => {_name = input;}}/>
    <button type='submit'>Let get started!</button>
    </form>
    </div>

  );
}
NewPetForm.propTypes = {
  onNewPetCreation: PropTypes.func
};
export default NewPetForm;
