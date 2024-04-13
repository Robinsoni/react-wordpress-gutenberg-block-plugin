import React from 'react'
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import "./editor.scss";
import { __ } from "@wordpress/i18n";
import metadata from './block.json';
export default function Edit(props) {
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps(blockProps)
	return (
		<>
			<div {...blockProps} >
				<div className={`edit-mode`}>
					Edit
					{/* <span className='piccy-label'>
						{__("Piccy image gallery",metadata.textdomain)}
					</span> */}
					<div {...innerBlockProps}></div>
				</div>
			</div>
		</>);
}      
