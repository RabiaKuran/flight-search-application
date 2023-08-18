import React from 'react';
import { ArrowForward } from '@mui/icons-material';

const UzunInceOk = () => {
  const okStili = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    
  };

  const cizgiStili = {
    flex: 1,
    borderBottom: '2px solid black',
  };

  return (
    <div style={okStili}>
      <div style={cizgiStili}></div>
    </div>
  );
};

export default UzunInceOk;
