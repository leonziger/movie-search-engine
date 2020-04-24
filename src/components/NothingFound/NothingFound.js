import React from 'react';
import { Typography } from '@material-ui/core';

export const NothingFound = () => {
  return (
    <div>
      <Typography align="center" color="error" variant="subtitle1" justify="center" component="p">
        Ошибка: ничего не найдено !
      </Typography>
    </div>
  );
};
