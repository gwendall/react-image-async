# React Image Async

A render prop component to get an image loading status.

# Installation

```shell
npm install react-image-async
```

or

```shell
yarn add react-image-async
```

# How it works

This library uses a render prop that returns the loading status of an image. It is useful for error handling and graceful image rendering.

```javascript
import React from 'react';
import ImageAsync from 'react-image-async';

const SRC = 'https://www.tesla.com/sites/default/files/images/software_update.jpg';
export default () => (
  <ImageAsync src={SRC}>
    {({ loaded, error }) => (loaded ? <img src={SRC} /> : <div>Loading...</div>)}
  </ImageAsync>
);
```
