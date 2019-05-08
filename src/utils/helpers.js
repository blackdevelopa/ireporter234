import axios from 'axios';

export const uploadMedia = async data => {
  const images = [...data];
  const uploads = images.map(file => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');
    formData.append('timestamp', Date.now());

    return axios.post(`${process.env.CLOUDINARY_API}`, formData);
  });
  const uploadResponse = uploads.length ? await axios.all(uploads) : [];
  const media = uploadResponse.map(m => ({
    url: m.data.secure_url,
    type: m.data.resource_type,
  }));
  images.images = media.filter(m => m.type === 'image').map(img => img.url);
  return images.images;
};
