<template>
  <div
    class="w-full h-[100vh] text-bold flex flex-col items-center justify-center"
    dir="rtl"
  >
  
    <!-- Search Input -->
    <div class="w-[80%] rounded-xl mb-4 flex justify-center pt-5">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="بحث..."
        class="w-[30%] bg-white  p-2 border rounded-xl shadow"
      />
      <router-link to="/add">
        <button class="bg-[gray] p-3 rounded-md mx-3 text-white">اضافه متدرب  +</button>
      </router-link>
      <router-link to="/">
        <button  @click="logout"
        class="bg-[gray] p-3 rounded-md mx-3 text-white">تسجيل خروج</button>
      </router-link>
    </div>
    <!-- Table -->
    <v-table class="rounded-xl shadow-xl w-[80%] h-[90vh]" fixed-header>
      <thead class="w-full text-center">
        <tr>
          <th class="text-center">الاسم</th>
          <th class="text-center">رقم الهويه</th>
          <th class="text-center">النوع</th>
          <th class="text-center">رقم الجوال</th>
          <th class="text-center">المدينه</th>
          <th class="text-center">إجراءات</th>
        </tr>
      </thead>
      <tbody dir="rtl">
        <tr v-for="item in filteredDesserts" :key="item.name">
          <td class="text-center">{{ item.name }}</td>
          <td class="text-center">{{ item.national_id }}</td>
          <td class="text-center">{{ item.gender }}</td>
          <td class="text-center">{{ item.phone_number }}</td>
          <td class="text-center">{{ item.city }}</td>
          <td class="flex items-center justify-center">
            <button
              class="bg-blue-500 text-white mx-1 px-4 py-2 rounded hover:bg-blue-600"
              @click="editItem(item)"
            >
              تعديل
            </button>
            <button
              class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
              @click="deleteItem(item.id)"
            >
              حذف
            </button>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>


<script>
import basurl from "../interceptors/interceptorsDeveloper";
export default {

  data() {
    return {
      desserts: [],
      searchQuery: "", // Search query input
    };
  },
  computed: {
    filteredDesserts() {
      // Filter desserts based on the search query
      return this.desserts.filter((item) =>
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    getAllStudents() {
      basurl
        .get(`all-certificates`)
        .then((response) => {
          this.desserts = response.data.data;
          console.log(response.data);
        })
        .catch((error) => {
          this.error = " لا يوجد بيانات";
        });
    },  
    logout(){
      localStorage.removeItem("token");
      this.navigateTo(`/`);
    },
    editItem(item) {
      console.log("Editing item:", item);
      this.navigateTo(`/edit/${item.id}`);
    },


    deleteItem(id) {
      basurl
        .delete(`certificates/${id}`)
        .then((response) => {
          this.desserts = this.desserts.filter((item) => item.id !== id);
            alert("تم الحذف بنجاح");
        })
        .catch((error) => {
          alert("حدث خطأ أثناء الحذف");
        });
    },  
  
    navigateTo(route) {
      this.$router.push({ path: route });
    },
  },
  mounted() {
    this.getAllStudents();
  },
};
</script>

