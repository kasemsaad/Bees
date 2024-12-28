<template>
  <div
    class="w-full h-[100vh]  flex items-center justify-center"
    dir="rtl"
    style="
      background-image: url(../assets/icons/IMG-20240511-WA0003-fotor-bg-remover-20240511164232.png);
    "
  >
    <div class="w-1/2 py-5 flex  shadow-lg rounded-xl flex-col items-center justify-center">
        <img class="sm:w-[10px] md:w-[40px] w-[40px]" src="../assets/icons/IMG-20240511-WA0003-fotor-bg-remover-20240511164232.png" alt="">
      <label for="" class="lg:text-4xl">تسجيل الدخول</label>

      <!-- <div class="w-full bg-red flex-wrap"> -->
      <input
        type="text"
        class="bg-white rounded-lg w-2/3 py-4 my-3 px-3"
        v-model="Username"
        placeholder="اسم المستخدم"
      />
      <input
        type="Password"
        class="bg-white rounded-lg w-2/3 py-4 my-3 px-3"
        v-model="Pass"
        placeholder="كلمه المرور"
      />
      <!-- </div> -->
      <div class="w-2/3 flex flex-col items-start">
        <p v-if="error" class="text-red-500 lg:text-2xl">{{ error }}</p>
      </div>
    <div class="">
        <button
        @click="submit()"
        class="bg-[gray] text-white ms-3 mt-2  px-5 py-2 text-xl rounded-lg"
      >
        تسجيل الدخول
      </button>
      <button
        @click="navigateTo(`/`)"
        class="bg-[gray] text-white ms-3 mt-2  px-10 py-2 text-xl rounded-lg"
      >
      الرئيسية
      </button>
    </div>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      Username: "",
      Pass: "",
      error: "", // Error message state
    };
  },
  methods: {
    submit() {
      // Validate Username and Password
      if (!this.Username) {
        this.error = "يرجى إدخال اسم المستخدم"; // Set the error message
        return;
      }
      if (!this.Pass) {
        this.error = "يرجى إدخال رقم المرور "; // Set the error message
        return;
      }

      // Prepare request data
      const requestData = {
        username: this.Username,
        password: this.Pass,
      };

      // Make the POST request
      fetch(`http://localhost:8000/api/admin/login`, {
        method: "POST", // Use POST method
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(requestData), // Convert request data to JSON
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Login failed");
          }
          return response.json(); // Parse JSON response
        })
        .then((res) => {
          console.log(res); // Handle the response
          localStorage.setItem("token", res.data.token);

          this.navigateTo(`/list`);
        })
        .catch((error) => {
          this.error = " اسم المستخدم او كلمه المرو غير صحيحه "; // Handle errors
        });
    },

    navigateTo(route) {
      this.$router.push({ path: route });
    },
  },
};
</script>
  