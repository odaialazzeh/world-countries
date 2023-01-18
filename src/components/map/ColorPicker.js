import React from 'react';
import { GithubPicker } from 'react-color';
import PropTypes from 'prop-types';

const ColorPicker = ({ color, handleColorChange }) => (
  <GithubPicker color={color} onChangeComplete={handleColorChange} />
);
export default ColorPicker;

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  handleColorChange: PropTypes.string.isRequired,
};
