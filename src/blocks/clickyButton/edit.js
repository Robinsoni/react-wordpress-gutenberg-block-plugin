import React from 'react'
import { useBlockProps, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
export default function Edit(props) {
	const { className, ...blockProps } = useBlockProps();

	return (
		<div {...blockProps} className={`${className} alignfull`}>
			<RichText
				placeholder='label text'
				value={props.attributes.labelText}
				onChange={
					(newValue) => {
						props.setAttributes({
							labelText: newValue,
						});
					}
				}
				allowedFormats={[]}
				multiline={false}
				onSplit={() => { }}
				onReplace={() => { }}
			></RichText>

		</div>
	)
}
