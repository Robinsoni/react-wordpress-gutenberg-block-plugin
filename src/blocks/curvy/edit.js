/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, HorizontalRule, RangeControl } from "@wordpress/components";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import block_metadata from './block.json';
import { Curve } from './components/curve';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	/* console.log("props** ",props); */
	console.log("block props** ", useBlockProps());
	const { className, ...blockProps } = useBlockProps();
	
	return (
		<>
			<section className={`${className} alignfull`} {...blockProps} >
				{
					props.attributes.enableTopCurve &&
					<Curve 
					height = {props.attributes.topHeight}
					width = {props.attributes.topWidth}
					flipX = {props.attributes.topFlipX}
					flipY = {props.attributes.topFlipY}
					></Curve>
				}
			</section>
			<InspectorControls>
				<PanelBody title={__("Top curv", block_metadata.textdomain)}>
					<div style={{ display: "flex" }} >
						<ToggleControl
							onChange={(isChecked) => {
								props.setAttributes({
									enableTopCurve: isChecked
								});
							}}
							checked={props.attributes.enableTopCurve}
						/>
						<span>{__("Enable top curve", block_metadata.textdomain)}</span>
					</div>
					<div  >
						<HorizontalRule />
						{/* 	<span>{__("Width",block_metadata.textdomain)}</span> */}
						<RangeControl
							min={100}
							max={300}
							value={props.attributes.topWidth || 100}
							onChange={(newValue) => {
								props.setAttributes({
									topWidth: parseInt(newValue)
								})
							}}
							label={__("Width", block_metadata.textdomain)} />
					</div>
					<div  >
						<HorizontalRule />
						{/* 	<span>{__("Width",block_metadata.textdomain)}</span> */}
						<RangeControl
							min={100}
							max={300}
							value={props.attributes.topHeight || 100}
							onChange={(newValue) => {
								props.setAttributes({
									topHeight: parseInt(newValue)
								})
							}}
							label={__("Height", block_metadata.textdomain)} />
					</div>
					<HorizontalRule />
					<div style={{ display: "flex" }} >
						<ToggleControl
							onChange={(isChecked) => {
								props.setAttributes({
									topFlipX: isChecked
								});
							}}
							checked={props.attributes.topFlipX}
						/>
						<span>{__("Flip Horizontally", block_metadata.textdomain)}</span>
					</div>
					<HorizontalRule />
					<div style={{ display: "flex" }} >
						<ToggleControl
							onChange={(isChecked) => {
								props.setAttributes({
									topFlipY: isChecked
								});
							}}
							checked={props.attributes.topFlipY}
						/>
						<span>{__("Flip Vertically", block_metadata.textdomain)}</span>
					</div>
				</PanelBody>
			</InspectorControls>

		</>
	);
}
