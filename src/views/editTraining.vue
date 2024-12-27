<template>
  <div
    class="w-full flex items-center justify-center"
    dir="rtl"
    style="
      background-image: url(../assets/icons/IMG-20240511-WA0003-fotor-bg-remover-20240511164232.png);
    "
  >
    <div class="w-1/2 my-10 rounded-xl shadow-xl">
      <div class="bg-white rounded-xl shadow-xl p-6 w-[100%]">
        <h2 class="text-xl font-bold mb-4">التسجيل في دورة (أساسيات تربية النحل وإنتاج العسل)</h2>

        <!-- Full Name -->
        <div class="mb-4">
          <label class="block mb-2 font-medium">الاسم الرباعي *</label>
          <input
            v-model="formData.name"
            type="text"
            placeholder="يجب أن يكون الاسم مطابق للهوية"
            class="w-full p-2 border rounded"
            :class="{'border-red-500': errors.name}"
            required
          />
          <p v-if="errors.name" class="text-red-500 text-sm">الاسم مطلوب</p>
        </div>

        <!-- Gender -->
        <div class="mb-4">
          <label class="block mb-2 font-medium">الجنس *</label>
          <div class="flex items-center space-x-4">
            <label class="flex items-center">
              <input
                type="radio"
                v-model="formData.gender"
                value="ذكر"
                required
                class="mr-2"
              />
              👱‍♂️ ذكر
            </label>
            <label class="flex items-center">
              <input
                type="radio"
                v-model="formData.gender"
                value="انثي"
                class="mr-2"
              />
              👧 أنثى
            </label>
          </div>
          <p v-if="errors.gender" class="text-red-500 text-sm">الجنس مطلوب</p>
        </div>

        <!-- National ID -->
        <div class="mb-4">
          <label class="block mb-2 font-medium">رقم الهوية *</label>
          <input
            v-model="formData.national_id"
            type="text"
            placeholder="استخدم الأرقام الإنجليزية مثال (1234567890)"
            class="w-full p-2 border rounded"
            :class="{'border-red-500': errors.national_id}"
            required
          />
          <p v-if="errors.national_id" class="text-red-500 text-sm">رقم الهوية مطلوب</p>
        </div>

        <!-- Phone Number -->
        <div class="mb-4">
          <label class="block mb-2 font-medium">رقم الجوال *</label>
          <input
            v-model="formData.phone_number"
            type="text"
            placeholder="استخدم الأرقام الإنجليزية مثال (1234567890)"
            class="w-full p-2 border rounded"
            :class="{'border-red-500': errors.phone_number}"
            required
          />
          <p v-if="errors.phone_number" class="text-red-500 text-sm">رقم الجوال مطلوب</p>
        </div>

        <!-- City -->
        <div class="mb-4">
          <label class="block mb-2 font-medium">المدينة أو المحافظة *</label>
          <input
            v-model="formData.city"
            type="text"
            class="w-full p-2 border rounded"
            :class="{'border-red-500': errors.city}"
            required
          />
          <p v-if="errors.city" class="text-red-500 text-sm">المدينة أو المحافظة مطلوبة</p>
        </div>

        <!-- Payment Source -->
        <div class="mb-4">
          <label class="block mb-2 font-medium">الشخص المحول للمبلغ *</label>
          <div class="flex items-center space-x-4">
            <label class="flex items-center">
              <input
                type="radio"
                v-model="formData.transferred_by"
                value="trainee"
                required
                class="mr-2"
              />
              المتدرب من قام بالتحويل
            </label>
            <label class="flex items-center">
              <input
                type="radio"
                v-model="formData.transferred_by"
                value="other"
                class="mr-2"
              />
              غير ذلك
            </label>
          </div>
          <input
            v-if="formData.transferred_by === 'other'"
            v-model="formData.other"
            type="text"
            placeholder="اكتب اسم الشخص المحول"
            class="w-full p-2 border rounded mt-2"
            :class="{'border-red-500': errors.other}"
          />
          <p v-if="errors.transferred_by" class="text-red-500 text-sm">الشخص المحول للمبلغ مطلوب</p>
        </div>

        <!-- From Date -->
        <div class="mb-4">
          <label class="block mb-2 font-medium">تاريخ البداية *</label>
          <input
            v-model="formData.from_date"
            type="date"
            class="w-full p-2 border rounded"
            :class="{'border-red-500': errors.from_date}"
            required
          />
          <p v-if="errors.from_date" class="text-red-500 text-sm">تاريخ البداية مطلوب</p>
        </div>

        <!-- To Date -->
        <div class="mb-4">
          <label class="block mb-2 font-medium">تاريخ النهاية *</label>
          <input
            v-model="formData.to_date"
            type="date"
            class="w-full p-2 border rounded"
            :class="{'border-red-500': errors.to_date}"
            required
          />
          <p v-if="errors.to_date" class="text-red-500 text-sm">تاريخ النهاية مطلوب</p>
        </div>

        <!-- Hours -->
        <div class="mb-4">
          <label class="block mb-2 font-medium">عدد الساعات *</label>
          <input
            v-model="formData.hours"
            type="number"
            class="w-full p-2 border rounded"
            :class="{'border-red-500': errors.hours}"
            required
          />
          <p v-if="errors.hours" class="text-red-500 text-sm">عدد الساعات مطلوب</p>
        </div>

        <!-- Accept Policy -->
        <div class="mb-4">
          <label class="block mb-2 font-medium">قبول السياسة *</label>
          <input
            v-model="formData.accept_policy"
            type="checkbox"
            :true-value="true"
            :false-value="false"
            required
          />
          <p v-if="errors.accept_policy" class="text-red-500 text-sm">قبول السياسة مطلوب</p>
        </div>

        <!-- Submit Button -->
       
        <button
        type="submit"
        class="w-full bg-[gray] text-white py-2 rounded hover:bg-[#f3e5b6]"
        @click="submitForm(this.$route.params.id)"
        >
        تعديل
      </button>
     <router-link to="/list">
      <button
      type="submit"
      class="w-full mt-3 bg-[#040404] text-white py-2 rounded hover:bg-[#f3e5b6]"
      @click="submitForm"
    >
      رجوع
    </button>
     </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { id } from "vuetify/locale";
import basurl from "../interceptors/interceptorsDeveloper";

export default {
  data() {
    return {
      id: "",
      token: localStorage.getItem("token"),
      formData: {
        name: "",
        gender: "",
        national_id: "",
        phone_number: "",
        city: "",
        transferred_by: "",
        other: "",
        accept_policy: false,
        from_date: "",
        to_date: "",
        hours: "",
      },
      errors: {},
    };
  },
  methods: {
    validateForm() {
      this.errors = {}; // Reset errors
      let isValid = true;

      // Check all required fields
      if (!this.formData.name) {
        this.errors.name = true;
        isValid = false;
      }
      if (!this.formData.gender) {
        this.errors.gender = true;
        isValid = false;
      }
      if (!this.formData.national_id) {
        this.errors.national_id = true;
        isValid = false;
      }
      if (!this.formData.phone_number) {
        this.errors.phone_number = true;
        isValid = false;
      }
      if (!this.formData.city) {
        this.errors.city = true;
        isValid = false;
      }
      if (!this.formData.transferred_by) {
        this.errors.transferred_by = true;
        isValid = false;
      }
      if (!this.formData.from_date) {
        this.errors.from_date = true;
        isValid = false;
      }
      if (!this.formData.to_date) {
        this.errors.to_date = true;
        isValid = false;
      }
      if (!this.formData.hours) {
        this.errors.hours = true;
        isValid = false;
      }
      if (!this.formData.accept_policy) {
        this.errors.accept_policy = true;
        isValid = false;
      }

      return isValid;
    },
    getStudent(id) {
      basurl
        .get(`certificates/${id}`)
        .then((response) => {
          this.formData = response.data.data;
          console.log(response.data.data);
          console.log(formData);
        })
        .catch((error) => {
          this.error = " لا يوجد بيانات";
        });
    },  
    submitForm(id) {
      if (this.validateForm()) {
        console.log("Data to submit:", this.formData); // Debugging line
        basurl
          .put(`certificates/${id}`, this.formData)
          .then((response) => {
            alert("تم إرسال البيانات بنجاح!");
            console.log("Response data:", response.data);
            // Reset form
            this.formData = {
              name: "",
              gender: "",
              national_id: "",
              phone_number: "",
              city: "",
              transferred_by: "",
              other: "",
              accept_policy: false,
              from_date: "",
              to_date: "",
              hours: null,
            };
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          });
      } else {
        console.log("Form validation failed");
      }
    },
  },
  mounted() {
    this.getStudent(this.$route.params.id);
    this.id = this.$route.params.id;
  },
};
</script>
