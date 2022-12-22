import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/todo');
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Root;
