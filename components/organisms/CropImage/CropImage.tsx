/* eslint-disable @next/next/no-img-element */
import { ImgHTMLAttributes, useState } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Box from '../../atom/Box';
import Button from '../../atom/Button';

type Src = ImgHTMLAttributes<HTMLImageElement>['src'];
type Image = HTMLImageElement | null;

interface CropImageProps {
  src: Src;
  output: (file: File) => void;
}

export const CropImage: React.FC<CropImageProps> = ({ src, output }) => {
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 100,
    height: 45,
    x: 0,
    y: 0
  });
  const [image, setImage] = useState<Image>(null);

  const handleCropImage = () => {
    cropper(image, crop);
  };

  const cropper = (image: Image, crop: Crop): File | null => {
    if (image) {
      const canvas = document.createElement('canvas');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

      const pixelRatio = window.devicePixelRatio;
      canvas.width = crop.width * pixelRatio;
      canvas.height = crop.height * pixelRatio;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.imageSmoothingQuality = 'high';

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      canvas.toBlob((blob: Blob | null) => {
        console.log(blob);
        if (blob) {
          console.log('hij');
          let file = new File([blob], 'fileName.jpg', { type: 'image/jpeg' });
          output(file);
        }
        return null;
      }, 'image/jpeg');
    }
    return null;
  };

  if (!src) return null;
  return (
    <Box className="flex flex-col justify-center items-center space-y-4">
      <ReactCrop minWidth={100} crop={crop} onChange={setCrop} aspect={5 / 3} locked keepSelection>
        <img src={src} alt="cropped image" onLoad={e => setImage(e.currentTarget)} />
      </ReactCrop>
      <Button onClick={handleCropImage}>Crop</Button>
    </Box>
  );
};

export default CropImage;
