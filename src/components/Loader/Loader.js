import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  container: {
    width: '100%'
  },
  spinner: {
    margin: '24px auto',
    display: 'block'
  }
};

export const Loader = () => {

  useEffect(() => {
    Loader();
  }, []);

  return (
    <div style={styles.container}>
      <CircularProgress style={styles.spinner} size={68} thikness={5} />
    </div>
  )
}
