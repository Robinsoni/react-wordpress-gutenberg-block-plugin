import React from 'react'
import {useSelect} from '@wordpress/data';
export const useImage = (imageId) => {
  return (
     useSelect(
		(select) => {
		  const { getMedia } = select('core');
		  return imageId ? getMedia(imageId) : null;
		},
		[imageId]  
	  )
  );
}
