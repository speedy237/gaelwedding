import React from 'react';

interface ImageItem {
  src: string;
  alt: string;
}

interface Props {
  images: ImageItem[];
}

const ImageGrid: React.FC<Props> = ({ images }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((img, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-md group">
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
        />
      </div>
    ))}
  </div>
);

export default ImageGrid;
