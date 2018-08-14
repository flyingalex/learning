import React from 'react';
import { throttle } from 'lodash-es';

const getWindowSize = () => {
  let winW = 0;
  let winH = 0;
  if (document.body && document.body.offsetWidth) {
    winW = document.body.offsetWidth;
    winH = document.body.offsetHeight;
  }
  if (document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
    winW = document.documentElement.offsetWidth;
    winH = document.documentElement.offsetHeight;
  }
  if (window.innerWidth && window.innerHeight) {
    winW = window.innerWidth;
    winH = window.innerHeight;
  }
  return { w: winW, h: winH };
};

const containerStyle = {
  display: 'flex',
  marginBottom: '30px',
  padding: '40px',
  alignItems: 'center',
};

class Parallax extends React.Component {
  componentDidMount() {
    const winSize = getWindowSize();
    window.addEventListener(
      'scroll',
      throttle(() => {
        const eles = document.getElementsByClassName('img');
        [...eles].forEach(ele => {
          const position = ele.getBoundingClientRect();
          const top = position.top;
          if (winSize.h - top > 0) {
            const percent = ((winSize.h - top) * 15) / winSize.h;
            ele.style = `transform: translateY(-${percent}%)`;
          }
        });
      }, 16),
    );
  }
  render() {
    return (
      <div>
        <div className="container" style={containerStyle}>
          <img style={{ paddingRight: '20px' }} className="img" src="http://via.placeholder.com/400x400" />
          <div>
            Just put your image size after our URL and you'll get a placeholder image. Just put your image size after
            our URL and you'll get a placeholder image. Just put your image size after our URL and you'll get a
            placeholder image. Just put your image size after our URL and you'll get a placeholder image.
          </div>
        </div>
        <div className="container" style={containerStyle}>
          <img style={{ paddingRight: '20px' }} className="img" src="http://via.placeholder.com/400x400" />
          <div>
            Just put your image size after our URL and you'll get a placeholder image. Just put your image size after
            our URL and you'll get a placeholder image. Just put your image size after our URL and you'll get a
            placeholder image. Just put your image size after our URL and you'll get a placeholder image.
          </div>
        </div>
        <div className="container" style={containerStyle}>
          <img style={{ paddingRight: '20px' }} className="img" src="http://via.placeholder.com/400x400" />
          <div>
            Just put your image size after our URL and you'll get a placeholder image. Just put your image size after
            our URL and you'll get a placeholder image. Just put your image size after our URL and you'll get a
            placeholder image. Just put your image size after our URL and you'll get a placeholder image.
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
