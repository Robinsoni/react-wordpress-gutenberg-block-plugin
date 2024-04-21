import React from 'react';
import { useImage } from '../../../hooks/useImage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from '@fortawesome/free-solid-svg-icons';

export default function ImageThumbnail(props){
  const imageData = useImage(props.imageData);
  return (
    imageData?.source_url && <img 
    className={'thumbnail-image ' + (props.class?props.class:"")} 
    src={imageData.source_url}
     onClick={() => {props.imageClickHandeler?props.imageClickHandeler():console.log("no handler attached")}}
     />
  );
}
