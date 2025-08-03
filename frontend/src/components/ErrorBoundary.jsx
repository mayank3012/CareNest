import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error to an error reporting service here
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
          <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Something went wrong.</h2>
            <p className="text-gray-600 mb-2">{this.state.error?.toString()}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={() => window.location.reload()}>Reload</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
