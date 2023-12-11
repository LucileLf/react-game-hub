import noImage from '../assets/no-image-placeholder.webp'

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = 'media/';
  const index = url.indexOf(target) + target.length; //get position of the end of "media/"
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index); //API support cropping
}

export default getCroppedImageUrl;
