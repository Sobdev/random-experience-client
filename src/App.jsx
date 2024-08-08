import React, { Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import AppRoutes from './routes/AppRoutes';
import Toast from './components/Toast/Toast';
import Footer from './components/Footer/Footer';
import BtnUp from './components/BtnUp/BtnUp';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <div id="content">
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
        <Toast />
      </div>
      <BtnUp />
      <Footer />
    </>
  );
}

export default React.memo(App);
