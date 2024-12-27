<template>
  <div class="mx-10 mt-3 flex flex-col justify-center" dir="rtl">
    <HeaderComponent />
    <div
      class="bg-[#f3e5b6] rounded-xl my-16 py-5 flex w-full"
      style="font-size: 30px"
    >
      <RouterLink class="ps-4" to=""> الإستعلام عن الشهادة</RouterLink>
    </div>
    <div class="w-full flex justify-center">
      <div
        class="bg-[#f3e5b6] text-center rounded-xl w-[40rem] py-5"
        style="font-size: 20px"
      >
        السلام عليكم ورحمة الله وبركاته

        <div class="text-start ps-3 pt-3">
          للتاكد من شهادتك الرجاء ادخال رقم الهوية:
          <div class="pt-4">
            <input
              type="text"
              class="bg-white rounded-lg"
              v-model="code_certificate"
              required
            />

            <button
              @click="submit(code_certificate)"
              class="bg-[gray] text-white ms-3 px-3 rounded-lg"
            >
              اظهار
            </button>
          </div>
          <!-- Error message -->
          <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
        </div>
      </div>
    </div>
    <footer class="flex justify-center" style="font-size: 20px">
      <p
        class="flex justify-center text-center bg-[#f3e5b6] rounded-md w-[40rem] py-3 mt-10"
      >
        كل الحقوق محفوظة للجمعية التعاونية للنحالين بتبوك 2024
      </p>
    </footer>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import HeaderComponent from "../components/header.vue";
import basurl from "../interceptors/interceptorsDeveloper";

export default {
  components: { HeaderComponent },
  data() {
    return {
      code_certificate: "", // Input for certificate code
      error: "", // Error message state
    };
  },
  methods: {
    submit() {
      // Check if the certificate code is provided
      if (!this.code_certificate) {
        this.error = "يرجى إدخال رقم الهوية"; // Error for empty input
        return;
      }

      // Make API call to fetch the certificate
      basurl
        .get(`certificates/${this.code_certificate}`)
        .then((response) => {
          if (response && response.data) {
            // Navigate to the certificate route if valid
            this.navigateTo(`/certificate/${this.code_certificate}`);
          } else {
            // Handle invalid certificate error
            this.error = "رقم الهوية غير صحيح";
          }
        })
        .catch(() => {
          // Handle API errors
          this.error = "رقم الهوية غير صحيح";
        });
    },
    navigateTo(route) {
      // Navigate to the given route
      this.$router.push({ path: route });
    },
  },
};


</script>


<style>
</style>