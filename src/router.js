import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';
import Todo from './Pages/Todo';
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
