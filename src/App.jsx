import React, { Suspense } from 'react';
import '/src/App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const LazyHome = React.lazy(() => import('/src/components/Home'));
const LazyAbout = React.lazy(() => import('/src/components/About'));
const LazyPortfolio = React.lazy(() => import('/src/components/Portfolio'));
const LazyResume = React.lazy(() => import('/src/components/Resume'));
const LazyHobbiesAndInterests = React.lazy(() => import('/src/components/HobbiesAndInterests'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyHome />
      <LazyAbout />
      <LazyPortfolio />
      <LazyResume />
      <LazyHobbiesAndInterests />
    </Suspense>
  );
}

export default App;
