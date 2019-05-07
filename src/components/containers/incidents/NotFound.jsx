import React from 'react';
import Navbar from '../../navbar/Navbar';

const Notfound = () => (
  <div>
    <Navbar firstbtn="Redflag" secondbtn="Intervention" access="true" />
    <h1
      style={{
        textAlign: 'center',
        fontSize: '40px',
      }}
    >
      Sorry. We think a bear ate the page you are looking for.
    </h1>
  </div>
);

export default Notfound;
