import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export enum ETypeAlert {
  SUCCESS = 'success',
  ERROR = 'error',
  WARN = 'warn',
  INFOR = 'infor'
}

export const showAlert = (message: string, type: string = ETypeAlert.INFOR): void => {
  switch (type) {
    case ETypeAlert.SUCCESS:
      toast.success(message, { position: 'top-right' });
      return;
    case ETypeAlert.ERROR:
      toast.error(message, { position: 'top-right' });
      return;
    case ETypeAlert.WARN:
      toast.warn(message, { position: 'top-right' });
      return;
    case ETypeAlert.INFOR:
      toast.info(message, { position: 'top-right' });
  }
};
