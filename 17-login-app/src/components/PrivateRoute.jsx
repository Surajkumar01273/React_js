import React from 'react';
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({isLogedIn, children}) => {

    // const navigate = useNavigate();

    if(isLogedIn){
        return children;
    }
    else{
        return <Navigate to='/login' />;
    }

  return (
    <> 
    </>
  )
}

export default PrivateRoute
