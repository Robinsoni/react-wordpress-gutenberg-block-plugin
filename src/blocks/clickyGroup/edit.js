import React from 'react'
import {useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';
export default function Edit(props){
	const {className, ...blockProps} = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps,{
		template: [["blockylicious/clicky-button"]],
		allowedBlocks:["blockylicious/clicky-button"]
	});
  return (
 
		<div {...innerBlocksProps} className={`${className} alignfull` }></div>
	 
  )
}
