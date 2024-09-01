<template>
        <!-- carousel -->
<section class="bg-black text-white">
  <div class="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
    <div class="animate-slide-left group-hover:animation-pause flex gap-2 w-full ">
      <div v-for="(post, index) in posts" :key="index" class="inline-block mx-4 w-full ">
        <div class="w-full border border-1 border-white rounded-lg py-2 px-4"> 
          <a :href="post.href" class="flex flex-row">
            <div class=" text-md text-white flex flex-no-wrap items-center gap-2  font-semibold break-words">
              <svg class="h-4 w-4 fill-white/70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L80 480c-44.2 0-80-35.8-80-80L0 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 272c0 8.8 7.2 16 16 16s16-7.2 16-16L96 96zm64 24l0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L184 96c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16z"/></svg>
              <div>{{ post.title }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>

    
  </div>
</section>

</template>


<script>



export default {
  name: "Carousel",


  data() {
    return {
      menuVisible: false, // Tracks the visibility of the menu
      posts: [
        {
          title: "What is SaaS? Software as a Service Explained",
          desc:
            "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
          img:
            "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          date: "Jan 4 2022",
          href: "javascript:void(0)",
        },
        {
          title: "A Quick Guide to WordPress Hosting",
          desc:
            "According to him, “I'm still surprised that this has happened. But we are surprised because we are so surprised.” More revelations.",
          img:
            "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          date: "Jan 4 2022",
          href: "javascript:void(0)",
        },
        {
          title: "7 Promising VS Code Extensions Introduced in 2022",
          desc:
            "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
          img:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          date: "Jan 4 2022",
          href: "javascript:void(0)",
        },
        {
          title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
          desc:
            "The powerful gravity waves resulting from the impact of the planets' moons — four in total — were finally resolved in 2015 when gravitational.",
          img:
            "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          date: "Jan 4 2022",
          href: "javascript:void(0)",
        },
        {
          title: "What is SaaS? Software as a Service Explained",
          desc:
            "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
          img:
            "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          date: "Jan 4 2022",
          href: "javascript:void(0)",
        },
        {
          title: "A Quick Guide to WordPress Hosting",
          desc:
            "According to him, “I'm still surprised that this has happened. But we are surprised because we are so surprised.” More revelations.",
          img:
            "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          date: "Jan 4 2022",
          href: "javascript:void(0)",
        },
      ],
    };
  },



};
</script>