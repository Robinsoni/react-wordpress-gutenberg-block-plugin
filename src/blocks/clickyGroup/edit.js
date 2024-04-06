import React from 'react'
import {useBlockProps} from '@wordpress/block-editor';
export default function Edit(props){
	const {className, ...blockProps} = useBlockProps();
  return (
	<section {...blockProps} className={`${className} alignfull`}> 
	clicky group
	</section>
  )
}
