import * as action from '../action-types';

export const mediaUploadStart = () => ({
  type: action.UPLOAD_MEDIA_START,
});

export const mediaUploadSuccess = payload => ({
  type: action.MEDIA_UPLOAD_SUCCESS,
  payload,
});

export const mediaUploadReset = payload => ({
  type: action.MEDIA_UPLOAD_RESET,
  payload,
});
