import React, { useState } from 'react';
import PropTypes from 'prop-types';

const initialNewSmurf = {
  name: '',
  age: '',
  height: ''
};

const SmurfForm = ({ onSubmit, smurf }) => {
  const [newSmurf, setNewSmurf] = useState(smurf || initialNewSmurf);

  function onInputChange(e) {
    setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(newSmurf);
      }}
    >
      <input
        type="text"
        name="name"
        value={newSmurf.name}
        onChange={onInputChange}
        placeholder="name"
        autoComplete="off"
      />
      <input
        type="text"
        name="age"
        value={newSmurf.age}
        onChange={onInputChange}
        placeholder="age"
        autoComplete="off"
      />
      <input
        type="text"
        name="height"
        value={newSmurf.height}
        onChange={onInputChange}
        placeholder="height"
        autoComplete="off"
      />
    </form>
  );
};

SmurfForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SmurfForm;
