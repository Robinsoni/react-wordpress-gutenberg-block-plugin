import React from 'react'
import {
	useBlockProps,
	MediaUploadCheck,
	MediaUpload
} from '@wordpress/block-editor';
import {useSelect} from "@wordpress/data";
import {Button} from "@wordpress/components";
import "./editor.scss";
import { __ } from "@wordpress/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import metadata from './block.json';
import ImageThumbnail from './components/ImageThumbnail';
import { useImage } from '../../hooks/useImage';
export default function Edit(props) {
	const blockProps = useBlockProps();
	const imageData = useImage(props.attributes.imageId); 
	return (
		
		<div {...blockProps} >
			<div >
				<ImageThumbnail imageData={imageData} />
				
				{/* <FontAwesomeIcon icon={faPanorama} style={{ margin: "auto" }} /> */}
			</div>
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={["image"]}
					render={({ open }) => (
						<Button onClick={open}>Upload Media</Button>
					  )}
					onSelect={(item) => {
						props.setAttributes(
							{
								imageId : item.id
							}
						);
					}
				} 
				/>
			</MediaUploadCheck>

		</div>
	)
}
