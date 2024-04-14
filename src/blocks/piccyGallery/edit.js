import React from 'react'
import { useBlockProps, useInnerBlocksProps, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, Icon } from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";
import { __ } from "@wordpress/i18n";
import metadata from './block.json';
import { useSelect } from "@wordpress/data";
import ImageThumbnail from '../piccyImage/components/ImageThumbnail';
import { useImage } from '../../hooks/useImage';
export default function Edit(props) {
	const [editMode, setEditMode] = useState(true);
	 const getImageData = (id) => {
		return useImage(id);
	 }
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps(
		{
			className: "piccy-gallery-inner-blocks"
		},
		{
			allowedBlocks: ["blockylicious/piccy-image"]
		}
	);
	const innerBlocks = useSelect(
		(select) => {
			const { getBlocksByClientId } = select('core/block-editor');
			return props?.clientId ? getBlocksByClientId(props.clientId) : [];
		},
		[props.clientId]
	);
	const [previewImage, setPreviewImage] = useState({
		imageId: innerBlocks?.[0]?.innerBlocks?.[0]?.attributes?.imageId,
		clientId: innerBlocks?.[0]?.innerBlocks?.[0]?.clientId
	});

	const PreviewModeBlock = (props) => {
		return (<div className='preview-mode'>
			{(innerBlocks?.[0]?.innerBlocks || []).map((innerBlock, index) => {
				const imageBlockSelected = previewImage.imageId == innerBlock.attributes.imageId && previewImage.clientId == innerBlock.clientId;
				return <ImageThumbnail
					class={`${imageBlockSelected ? "selected" : ""}`}
					key={innerBlock.clientId}
					imageData={innerBlock.attributes.imageId}

					imageClickHandeler={() => {
						setPreviewImage({
							imageId: innerBlock.attributes.imageId,
							clientId: innerBlock.clientId
						});
					}}
				/>
			})}
		</div>)
	};
	return (
		<>
			<div {...blockProps} >
				{editMode && <div className={`edit-mode`}>
					{<span className='piccy-label'>
						{__("Piccy image gallery", metadata.textdomain)}
					</span>}
					<div {...innerBlockProps}></div>
				</div>}
				{!editMode &&
					<>
						<PreviewModeBlock /> <ImageThumbnail class="preview-thumb" imageData={previewImage.imageId} />
					</>
				}
			</div>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={!editMode ? <Icon icon="edit" /> : <Icon icon="welcome-view-site" />}
						label={
							editMode ? __("Preview gallery", metadata.textdomain) : __("Edit gallery", metadata.textdomain)
						}
						onClick={() => {

							setEditMode((prevState) => !prevState);

						}}
						placeholder='Click'
					/>
				</ToolbarGroup>
			</BlockControls>

		</>
	);
}      
