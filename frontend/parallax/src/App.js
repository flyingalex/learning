import React from 'react';
import { throttle } from 'lodash-es';
import Parallax from './Parallax';

const getWindowSize = () => {
  let winW = window.innerWidth;
  let winH = window.innerHeight;
  if (typeof winH != 'number') {
    if (document.compatMode == 'CSS1Compat') {
      winW = document.documentElement.clientWidth;
      winH = document.documentElement.clientHeight;
    } else {
      winW = document.body.clientWidth;
      winH = document.body.clientHeight;
    }
  }
  return { w: winW, h: winH };
};

const containerStyle = {
  display: 'flex',
  marginBottom: '30px',
  padding: '40px',
  alignItems: 'center',
};

class App extends React.Component {
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
        <Parallax
          tagName="div"
          containerProps={{
            className: 'container',
            style: containerStyle,
          }}
        >
          <img
            style={{ paddingRight: '20px' }}
            className="img"
            src="http://via.placeholder.com/400x400"
          />
          <div>
            Just put your image size after our URL and you'll get a placeholder
            image. Just put your image size after our URL and you'll get a
            placeholder image. Just put your image size after our URL and you'll
            get a placeholder image. Just put your image size after our URL and
            you'll get a placeholder image.
          </div>
        </Parallax>
        <Parallax
          tagName="div"
          containerProps={{
            className: 'container',
            style: containerStyle,
          }}
        >
          <img
            style={{ paddingRight: '20px' }}
            className="img"
            src="http://via.placeholder.com/400x400"
          />
          <div>
            Just put your image size after our URL and you'll get a placeholder
            image. Just put your image size after our URL and you'll get a
            placeholder image. Just put your image size after our URL and you'll
            get a placeholder image. Just put your image size after our URL and
            you'll get a placeholder image.
          </div>
        </Parallax>
        <Parallax
          tagName="div"
          containerProps={{
            className: 'container',
            style: containerStyle,
          }}
        >
          <img
            style={{ paddingRight: '20px' }}
            className="img"
            src="http://via.placeholder.com/400x400"
          />
          <div>
            Just put your image size after our URL and you'll get a placeholder
            image. Just put your image size after our URL and you'll get a
            placeholder image. Just put your image size after our URL and you'll
            get a placeholder image. Just put your image size after our URL and
            you'll get a placeholder image.
          </div>
        </Parallax>
      </div>
    );
  }
}

export default App;
