import {hideAlert, showAlert} from '../redux/modules/customAlert';
import {useDispatch} from 'react-redux';

export const usePopup = () => {
  const dispatch = useDispatch();

  return (content, styleOption, type, millis, cb) => {
    setTimeout(() => {
      dispatch(showAlert(content, styleOption, type));
      if (cb) cb();

      if (millis !== Number.POSITIVE_INFINITY) {
        setTimeout(() => {
          dispatch(hideAlert(content, styleOption, type));
        }, millis);
      }
    });
  };
};
