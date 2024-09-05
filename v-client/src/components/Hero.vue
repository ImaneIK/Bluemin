<template>

        <!-- HERO SECTION -->

        <div class="lg:mb-24 lg:px-24 2xl:py-12">
      <!-- text -->
      <div class=" px-4 lg:px-24 flex flex-col md:flex-row  items-center md:gap-24 ">
        <div class="px-4 md:px-0 mt-4 md:mt-0 md:ml-4 md:w-1/2 text-center md:text-justify font-dm text-gray-800 text-4xl lg:text-5xl font-medium leading-snug">
          Transform your ideas into powerful blog posts.
        </div>
        <div class="flex flex-col items-center md:w-1/2 p-8 gap-3">
          <div class=" text-md md:text-sm text-gray-500 text-center lg:text-start leading-relaxed font-nunito">
            Write, connect, and inspire. Whether you're a novice or a pro, this is your
            space. Start blogging today. Share your unique perspective and build your
            personal brand. Focus on your writing. We take care of the rest. Publish your
            thoughts effortlessly.
          </div>
          <button class="flex items-center ">
            <div  v-if="!$auth.isAuthenticated"
             @click="login"
            class="flex flex-none items-center gap-3 border px-3 py-1  border-1 border-indigo-500 text-indigo-500 font-medium rounded-full"
          >
           Get started <svg class="h-6 w-6 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"/></svg>
          </div>
          </button>
          
        </div>
      </div>

      <!-- grid --> 
      <div class="flex flex-col items-center md:flex-row lg:grid lg:grid-cols-3  gap-4 py-8 px-8 lg:px-24 mx-auto  xl:h-[50vh]">
        <!-- first column -->
        <div  class="flex-1 w-full h-full xl:h-[50vh] flex flex-col gap-4">
          <div  class=" py-4 md:py-0 px-6 font-nunito flex flex-col flex-initial justify-around flex-1 bg-indigo-500 rounded-2xl text-white ">
            <p class="text-left text-lg ">
              Your Stories Deserve to Be Heard. Join +20K worldwide bloggers
            </p>

            <div class="flex flex-row items-center gap-2">
              <div class="flex flex-none flex-row-reverse">
                <div
                  class="-translate-x-16 z-40 flex justify-center w-[5vh] h-[5vh] items-center text-center rounded-full bg-gray-100 text-indigo-600 font-bold"
                >
                  +5
                </div>
                <div
                  class="-translate-x-12 z-30 w-[5vh] h-[5vh] items-center rounded-full border-1 border-white bg-cover bg-center bg-[url('https://randomuser.me/api/portraits/men/62.jpg')]"
                ></div>
                <div
                  class="-translate-x-8 z-20 w-[5vh] h-[5vh] items-center rounded-full border-1 border-white bg-cover bg-center bg-[url('https://randomuser.me/api/portraits/women/75.jpg')]"
                ></div>
                <div
                  class="-translate-x-4 w-[5vh] h-[5vh] items-center rounded-full border-1 border-white bg-cover bg-center bg-[url('https://randomuser.me/api/portraits/women/68.jpg')]"
                ></div>
                <div
                  class="w-[5vh] h-[5vh] items-center rounded-full border-1 border-white bg-cover bg-center bg-[url('https://randomuser.me/api/portraits/men/62.jpg')]"
                ></div>
              </div>

              <div class="-ml-16">people have joined</div>
            </div>
          </div>

          <div
            class=" h-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-cover"
          >
            <div
              class="px-4 py-4 sm:px-6 bg-black bg-opacity-40 rounded-2xl h-full flex flex-col justify-end"
            >
              <time datetime="2022-10-10" class="block text-xs text-white/90">
                10th Oct 2022
              </time>

              <a href="#">
                <h3 class="mt-0.5 text-lg text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

          
            </div>
          </div>
        </div>

        <!-- second column -->
        <div class="hidden flex-1 h-full lg:block xl:h-[50vh] flex flex-col">
          <div
            class="flex-initial flex-1 h-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-cover"
          >
            <div
              class="flex flex-col justify-end p-4 sm:p-6 bg-black bg-opacity-40 rounded-2xl h-full"
            >
              <time datetime="2022-10-10" class="block text-xs text-white/90">
                10th Oct 2022
              </time>

              <a href="#">
                <h3 class="mt-0.5 text-lg text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                sed nulla ipsum eveniet corporis quidem
              </p>
            </div>
          </div>
        </div>

        <!-- third column -->
        <div class="flex-1 h-full  xl:h-[50vh] flex flex-col gap-4 ">
          <div
            class="h-full flex-initial rounded-2xl bg-[url('https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-cover"
          >
            <div class="flex flex-col justify-end p-4 sm:p-6 bg-black bg-opacity-40 rounded-2xl h-full">
              <time datetime="2022-10-10" class="block text-xs text-white/90">
                10th Oct 2022
              </time>

              <a href="#">
                <h3 class="mt-0.5 text-lg text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

              <!-- <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                  sed nulla ipsum eveniet corporis quidem
                </p> -->
            </div>
          </div>
          <div
            class="px-6 flex items-center flex-1  h-full bg-indigo-500 rounded-2xl text-white md:py-6"
          >
          <div class="font-dm font-medium text-xl">Express. Engage. Inspire.</div>
            <div class="font-nunito font-normal text-sm">Start your journey as a blogger today. Write, publish, and grow your audience with ease.</div>
         
            </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  methods:{
     // Log the user in
     login() {
      this.$auth.loginWithRedirect();
    },
  }
}
</script>