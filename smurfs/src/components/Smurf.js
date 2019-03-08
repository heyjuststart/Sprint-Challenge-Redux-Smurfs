import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SmurfForm from './SmurfForm';

const Smurf = ({ updateSmurf, deleteSmurf, smurf }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  if (isUpdating) {
    return (
      <SmurfForm
        smurf={smurf}
        onSubmit={smurf => {
          updateSmurf(smurf);
          setIsUpdating(false);
        }}
      />
    );
  } else {
    return (
      <div>
        {smurf.name}
        <button onClick={() => setIsUpdating(true)}>update</button>
        <button onClick={() => deleteSmurf(smurf)}>x</button>
      </div>
    );
  }
};

Smurf.propTypes = {
  updateSmurf: PropTypes.func.isRequired,
  deleteSmurf: PropTypes.func.isRequired
};

export default Smurf;
