import React, { useContext } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MoviesContext } from '../MoviesProvider';

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
  const { isLoading } = useContext(MoviesContext);

  return (
    <div style={styles.container}>
      {isLoading &&
        <CircularProgress style={styles.spinner} size={68} thikness={5} />
      }
    </div>
  )
}
