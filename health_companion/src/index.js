import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AppInstance from './AppInstance';
import { reduxStore } from './actions/reduxReducers/store';
import About from './globalPages/About';
import Contact from './globalPages/Contact';
import PageError from './globalPages/PageError';
import PageNotFound from './globalPages/PageNotFound';
import CompanionHome from './globalPages/home/CompanionHome';
import HealthCompanion from './healthCompanion/HealthCompanion';
import HealthCompanion2 from './healthCompanion2/HealthCompanion';
import './utilities/index.css';


// Get all from health_bot. that app is a testing app will delete that app soon.
document.title = "Health Companion";

/* 
  To access person need your login with our health bot API,
  User will call our api to authenticate programmatically "http://localhost:8888/api/auth",
    if org + user + etc match, 
      server will divert them to companion page
  if(logged)
  Serve companion chat page
  else
  Serve companion home page with "Org/User not found" */

// Must call our site like this, best as token based
const routesWithJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<AppInstance />} >
      <Route path="" >
        <Route path="" element={<HealthCompanion />} />
        <Route path="withStream" element={<HealthCompanion2 />} />
      </Route>
      <Route path='home' element={<CompanionHome />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="error" element={<PageError />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  ),
);

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore}>
    <RouterProvider router={routesWithJSX} />
  </Provider>
);