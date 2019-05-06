import React from 'react';
import Navbar from '../../navbar/Navbar';

const Notfound = () => (
  <div>
    <Navbar />
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
