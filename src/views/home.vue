<template>
    <div class="mx-10  mt-3 flex flex-col justify-center " dir="rtl">
        <!-- <p>Welcome to your Vue 3 application!</p> -->
        <HeaderComponent />
        <div class="bg-[#f3e5b6] rounded-xl my-16 py-5 flex justify-center  w-full" style="font-size: 50px;">
         <RouterLink class="text-center underline" to="/search">الاستعلام عن الشهادة</RouterLink>
        </div>
        <div class="w-full flex justify-center">
          <footer class="bg-[#f3e5b6] text-center rounded-xl w-[40rem] py-5 flex justify-center " style="font-size: 20px;">
            الجمعية التعاونية للنحالين بتبوك تحييكم
          </footer>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import HeaderComponent from '../components/header.vue';
export default {
  components: { HeaderComponent },

}
</script>

<style>

</style>