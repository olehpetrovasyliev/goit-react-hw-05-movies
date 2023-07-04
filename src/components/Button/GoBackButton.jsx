import React from 'react';

import propTypes from 'prop-types';

const GoBackButton = ({ cb }) => {
  return <button onClick={cb}> Go back</button>;
};

GoBackButton.propTypes = {
  cb: propTypes.func,
};

// #endregion

export default GoBackButton;
