<template>
        <!-- BLOG SNAPSHOTS -->

    <!-- first snapshot -->
    <section class="py-32 md:px-12 lg:px-24">
      <div class="max-w-screen-xl mx-auto px-4 md:px-8">
        <div class="text-center">
          <h2 class="text-2xl xl:text-3xl font-extrabold text-gray-900 sm:text-5xl">
            Customise Your Product
          </h2>

          <p class="mx-auto mt-4 max-w-sm text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores ipsum
            eos temporibus ea nihil.
          </p>

          <a
            href="#"
            class="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-xs xl:text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          >
            Get Started
          </a>
        </div>
        <ul class="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="(post, index) in posts"
            :key="index"
            class="w-full mx-auto group sm:max-w-sm"
          >
            <a :href="post.href">
              <img
                :src="post.img"
                loading="lazy"
                :alt="post.title"
                class="w-full rounded-lg"
              />
              <div class="mt-3 space-y-2">
                <span class="block text-indigo-600 text-sm">{{ post.date }}</span>
                <h3
                  class="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold"
                >
                  {{ post.title }}
                </h3>
                <p class="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                  {{ post.desc }}
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
</template>


<script>



export default {
  name: "Blog",


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