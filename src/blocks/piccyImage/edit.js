import React from 'react'
import {
	useBlockProps,
	MediaUploadCheck,
	MediaUpload
} from '@wordpress/block-editor'; 
import {Button} from "@wordpress/components";
import "./editor.scss";
import { __ } from "@wordpress/i18n";

import metadata from './block.json';
import ImageThumbnail from './components/ImageThumbnail'; 
export default function Edit(props) {
	const blockProps = useBlockProps();
	 
	return (
		
		<div {...blockProps} >
			<div >
				{<ImageThumbnail imageData={props.attributes.imageId} />}
			</div>
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={["image"]}
					render={({ open }) => (
						<Button onClick={open}>{props?.attributes?.imageId?"Replace Image":"Upload Image"}</Button>
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
