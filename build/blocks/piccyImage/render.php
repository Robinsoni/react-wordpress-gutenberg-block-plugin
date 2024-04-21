 <?
    $image_uri = wp_get_attachment_image_url($attributes['imageId'] ?? 0);
    $image_uri_large = wp_get_attachment_image_url($attributes['imageId'] ?? 0, "large");
?>
<div <? echo get_block_wrapper_attributes();?>>
 <img data-large-size="<? echo $image_uri_large; ?>" src="<?echo $image_uri;?>" class="thumbnail-image" />
</div>