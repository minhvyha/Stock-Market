import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

function ShareLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default ShareLayout;
