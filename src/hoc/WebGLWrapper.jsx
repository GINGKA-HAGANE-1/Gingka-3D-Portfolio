import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

const WebGLWrapper = (WrappedComponent) => {
  return function WithFallback(props) {
    return (
      <ErrorBoundary>
        <div className="relative w-full h-full">
          <WrappedComponent {...props} />
        </div>
      </ErrorBoundary>
    );
  };
};

export default WebGLWrapper;