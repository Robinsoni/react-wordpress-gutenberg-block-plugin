import React from 'react'
import { useBlockProps } from '@wordpress/block-editor';
import "./editor.scss";
import { __ } from "@wordpress/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import metadata from './block.json';
export default function Edit(props) {
	const blockProps = useBlockProps();

	return (

		<div {...blockProps} >
			<div >
				picccy image
				{/* <FontAwesomeIcon icon={faPanorama} style={{ margin: "auto" }} /> */}
			</div>

		</div>
	)
}
