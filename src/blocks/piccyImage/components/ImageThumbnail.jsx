import React from 'react';

export default function ImageThumbnail({imageData}){
  return (
    imageData?.source_url && <img src={imageData.source_url} className='thumbnail-image'/>
  );
}
