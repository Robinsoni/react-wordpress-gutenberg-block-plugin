/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */ 
     
    /* eslint-disable no-console */
    console.log( 'Hello World! (from blockylicious-curvy piccy - gallery)' );
    const image_containers = document.querySelectorAll(".wp-block-blockylicious-piccy-gallery > .render-image-container");
    const preview_images = document.querySelectorAll(".wp-block-blockylicious-piccy-gallery .image-preview");
   
    image_containers.forEach((container,index) => {
      
            
            const image = container?.querySelector("img");
            image.classList.add("selected");
            container.parentElement.querySelector("img.image-preview").src  = image.dataset.largeSize;
        
        container.addEventListener('click', addSelectedClass.bind(null,container));
    }); 
    function addSelectedClass(container,e){
       console.log("** ** container ",container);
        removeSelectedClass(container);
        if(e.target.tagName == "IMG"){
            e.target.classList.add("selected"); 
            container.parentElement.querySelector("img.image-preview").src =  e.target.dataset.largeSize;
        }
    }

    function removeSelectedClass(container){
        const thumbnail_images = container.querySelectorAll(".thumbnail-image");
        thumbnail_images.forEach(thumbImg => {
            thumbImg.classList.remove('selected');
        });
    }
     

