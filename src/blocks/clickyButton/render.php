
<?
    $block_attributes = get_block_wrapper_attributes([
      /*   'style' => 'padding-left:10px;' */
    ]);
    $post_uri = "#";
    if ($attributes['linkedPost'] ?? null) {
        $post_uri = get_permalink($attributes['linkedPost']);
         
      }
?>
<a href="<?echo $post_uri;?>" target="__blank" <? echo $block_attributes;?>><? echo $attributes["labelText"];?></a>