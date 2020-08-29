import {MatSnackBarConfig} from '@angular/material/snack-bar';

export const SNACKBAR_TIME = 2000;
export const SNACKBAR_CONFIG =  {
  duration: SNACKBAR_TIME,
  verticalPosition: 'bottom',
} as MatSnackBarConfig<any>;
