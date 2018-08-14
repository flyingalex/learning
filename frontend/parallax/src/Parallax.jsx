import React from 'react';
import PropTypes from 'prop-types';

class Parallax extends React.Component {
  render() {
    const { children, tagName, containerProps } = this.props;
    return React.createElement(tagName, containerProps, [...children]);
  }
}

Parallax.propTypes = {
  children: PropTypes.array,
  tagName: PropTypes.string,
  containerProps: PropTypes.object,
};

export default Parallax;
