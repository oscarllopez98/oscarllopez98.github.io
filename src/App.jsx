import React, { Suspense } from 'react';
import '/src/App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const LazyHome = React.lazy(() => import('/src/components/Home'));
const LazyAbout = React.lazy(() => import('/src/components/About'));
const LazyPortfolio = React.lazy(() => import('/src/components/Portfolio'));
const LazyResume = React.lazy(() => import('/src/components/Resume'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyHome />
      <LazyAbout />
      <LazyPortfolio />
      <LazyResume />
    </Suspense>
  );
}

export default App;
