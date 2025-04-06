import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('WebGL Error:', error);
    // Reset WebGL context
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (gl) {
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full bg-tertiary rounded-2xl flex items-center justify-center">
          <p className="text-white text-center"></p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;