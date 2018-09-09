<template>
       <div class="lookbook" :style="{ backgroundImage: `url('${img}')` }">
            <div>
                <h3 class="lookbook__heading">{{title}}</h3>
                <p class="lookbook__paragraph">{{text}}</p>
                <a href="#" class="primaryButton primaryButton--hovered">View Now</a>
            </div>
         </div>
</template>

<script>
export default {
    name: 'lookbookpreview',
    props: ["title", "text", "img"]
}
</script>
