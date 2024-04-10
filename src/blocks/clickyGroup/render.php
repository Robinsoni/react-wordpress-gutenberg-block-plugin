
<?
use BlockyliciousPlugins\Blockylicious;
$block_gap = Blockylicious::convert_custom_properties($attributes['style']['spacing']['blockGap'] ?? 0);
$block_attributes = get_block_wrapper_attributes([
    'style' => 'gap: ' . $block_gap . '; justify-content: ' . $attributes['justifyContent'],
    "class" => 'alignfull'
]);
?>
<div <? echo $block_attributes?>><?echo $content;?></div>
