import React from 'react';
import { render } from 'react-dom';
import ReactImageAsync from '../../lib';
import './styles.css';

const IMAGE =
  'https://www.tesla.com/tesla_theme/assets/img/modelx/slideshow/White_Cruise-1440.jpg?20180607';
function Demo() {
  return (
    <div>
      <h1>React Image Async</h1>
      <ReactImageAsync src={IMAGE}>
        {({ loaded, error }) => (
          <React.Fragment>
            <pre>{JSON.stringify({ loaded, error }, null, 3)}</pre>
            <img src={IMAGE} />
          </React.Fragment>
        )}
      </ReactImageAsync>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
