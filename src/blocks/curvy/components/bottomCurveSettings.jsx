import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, HorizontalRule, RangeControl, ColorPicker } from "@wordpress/components";
import { __ } from '@wordpress/i18n';
import block_metadata from '../block.json';
export const BottomCurveSettings = (props ) => {
    console.log("**  props ** ",props);
    return (
        <>
            <div  >
                <HorizontalRule />
                {/* 	<span>{__("Width",block_metadata.textdomain)}</span> */}
                <RangeControl
                    min={100}
                    max={300}
                    value={props.attributes.bottomWidth || 100}
                    onChange={(newValue) => {
                        props.setAttributes({
                            bottomWidth: parseInt(newValue)
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
                    value={props.attributes.bottomHeight || 100}
                    onChange={(newValue) => {
                        props.setAttributes({
                            bottomHeight: parseInt(newValue)
                        })
                    }}
                    label={__("Height", block_metadata.textdomain)} />
            </div>
            <HorizontalRule />
            <div style={{ display: "flex" }} >
                <ToggleControl
                    onChange={(isChecked) => {
                        props.setAttributes({
                            bottomFlipX: isChecked
                        });
                    }}
                    checked={props.attributes.bottomFlipX}
                />
                <span>{__("Flip Horizontally", block_metadata.textdomain)}</span>
            </div>
            <HorizontalRule />
            <div style={{ display: "flex" }} >
                <ToggleControl
                    onChange={(isChecked) => {
                        props.setAttributes({
                            bottomFlipY: isChecked
                        });
                    }}
                    checked={props.attributes.bottomFlipY}
                />
                <span>{__("Flip Vertically", block_metadata.textdomain)}</span>
            </div>
            <div>
                <label >{__("Color Picker", block_metadata.textdomain)}</label>
                <ColorPicker
                    onChange={(color) => {
                        props.setAttributes({
                            bottomColor: color
                        });
                    }}
                    value={props.attributes.bottomColor}
                />
            </div>
        </>
    )
};