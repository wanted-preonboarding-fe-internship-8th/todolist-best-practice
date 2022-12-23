import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Todo from './pages/Todo';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'todo',
        element: <Todo />,
      },
    ],
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
]);

export default router;
