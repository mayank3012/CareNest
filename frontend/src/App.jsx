import { memo, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ErrorBoundary from './components/ErrorBoundary';

const MemoizedLayout = memo(Layout);
const Home = lazy(() => import('./pages/home'));
const AdminLogin = lazy(() => import('./pages/Login'));

function App() {

  return (
    <ErrorBoundary>
      <MemoizedLayout>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-blue-700 text-xl">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AdminLogin />} />
          </Routes>
        </Suspense>
      </MemoizedLayout>
    </ErrorBoundary>
  );
}

export default App;
