import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, HorizontalRule, RangeControl, ColorPicker } from "@wordpress/components";
import { __ } from '@wordpress/i18n';
import block_metadata from '../block.json';
export const TopCurveSettings = (props ) => {
    console.log("**  props ** ",props);
    return (
        <>
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
            <div>
                <label >{__("Color Picker", block_metadata.textdomain)}</label>
                <ColorPicker
                    onChange={(color) => {
                        props.setAttributes({
                            topColor: color
                        });
                    }}
                    value={props.attributes.topColor}
                />
            </div>
        </>
    )
};