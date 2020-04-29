import React from 'react';
import loadingIndicator from '../../loader.gif';

const styles = {
  container: {
    width: '100%',
    height: '100%'
  },
  indicator: {
    margin: '24px auto',
    display: 'block'
  }
};

export const Loader = () => {
  return (
    <div style={styles.container}>
      <img src={loadingIndicator} alt="" style={styles.indicator}/>
    </div>
  );
};
