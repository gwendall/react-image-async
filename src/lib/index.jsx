import React from 'react';

const isBrowser = typeof window !== 'undefined';
const ReactIA = { images: [] };
if (isBrowser) {
  window.ReactIA = window.ReactIA || ReactIA;
}
const imageIsCached = src =>
  isBrowser ? window.ReactIA.images.includes(src) : ReactIA.images.includes(src);
const setImage = src => (isBrowser ? window.ReactIA.images.push(src) : ReactIA.images.push(src));

class ReactImageAsync extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: imageIsCached(props.src), error: false };
  }
  componentDidMount() {
    if (!isBrowser || !this.props.src || this.state.loaded) {
      return;
    }
    return this.load();
  }
  load = () => {
    const img = document.createElement('IMG');
    img.src = this.props.src;
    img.onload = this.onLoad;
    img.onerror = this.onError;
  };
  onLoad = () => {
    this.setState({ loaded: true, error: false });
    window.images.push(this.props.src);
  };
  onError = () => {
    this.setState({ loaded: false, error: true });
  };
  render() {
    return this.props.children({ ...this.state });
  }
}

export default ReactImageAsync;
