import React from 'react'
import { useBlockProps, useInnerBlocksProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components'
import { useSelect } from "@wordpress/data";
export default function Edit(props) {
	const { className, ...blockProps } = useBlockProps();
	const postTypes = useSelect((select) => {
		const data = select("core").getEntityRecords("root", "postType", {
			per_page: -1,
		});
		return data?.filter(
			(item) => item.visibility.show_in_nav_menus && item.visibility.show_ui
		);
	}); 
	const posts = useSelect(
		(select) => {
			const data = select("core").getEntityRecords(
				"postType",
				props.attributes.postType,
				{
					per_page: -1,
				}
			);
			return data;
		},
		[props.attributes.postType]
	); 


	return (
		<>
			<InspectorControls>
				<PanelBody title='Destination'>
					<SelectControl
						label="Type"
						value={props.attributes.postType}
						onChange={(newValue) => {
							props.setAttributes({
								postType: newValue
							});
						}}
						options={
							[
								{
									label: "Select a post type...",
									value: ""
								},
								...(postTypes || []).map(postType => {
									return {
										label: postType.labels.singular_name,
										value: postType.slug
									};
								})

							]
						}
					/>
					<SelectControl
						label={`Linked ${props.attributes.postType}`}
						value={props.attributes.linkedPost}
						onChange={(newValue) => {
							props.setAttributes({
								linkedPost: newValue ? parseInt(newValue) : null,
							});
							console.log(" linked post value changed ** ",props.attributes.linkedPost);
						}}
						options={[
							{
								label: `Select and link to a ${props.attributes.postType}`,
								value:""
							},
							...(posts || []).map(post => {
								return {
									label:post.title.rendered,
									value:post.id
								}
							})

						]}
					/>


				</PanelBody>
			</InspectorControls>
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
		</>
	)
}
