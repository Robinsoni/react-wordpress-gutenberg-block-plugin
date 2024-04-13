import React from 'react';

export default function ImageThumbnail({imageData}){
  return (
    imageData?.source_url && <img 
    className='thumbnail-image'
    
    src={imageData.source_url}
     />
  );
}
