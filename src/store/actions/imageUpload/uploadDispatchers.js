import axios from 'axios';
import * as actions from './uploadActions';

export const mediaUpload = payload => dispatch => {
  const { mediaFiles, stepIndex, uploadType } = payload;
  dispatch(actions.mediaUploadStart());

  const uploads = mediaFiles.map(file => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.UPLOAD_PRESET);
    formData.append('timestamp', Date.now());

    return axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/upload`,
      formData
    );
  });

  axios
    .all(uploads)
    .then(res => {
      const mediaInfo = res.map(uploadResponse => ({
        resType: uploadResponse.data.resource_type,
        url: uploadResponse.data.url,
      }));

      dispatch(actions.mediaUploadReset());

      if (uploadType === 'recipe_step') {
        dispatch(actions.mediaUploadSuccess(mediaInfo, stepIndex, uploadType));
      }
    })
    .catch(() => {});
};

export const resetUpload = () => actions.mediaUploadReset();
