<template>
<div class="w-full h-[100vh] flex items-center justify-center">
<div class="name">
  <div class="h-[10h]   text-[#434242] overflow-auto relative">
    <img class="box" src="../assets/certificate.svg" alt="">
    <!-- Name -->
    <label
      class="absolute name "
    >
      {{ data.name }}
        
    </label>

    <!-- Code Certificate -->
    <label
      class="absolute text-blue-700 underline res "
    >
      {{ data.national_id }}
    </label>

    <!-- Start Date -->
    <label
      class="absolute from bg-white px-6"
    >
    للفترة من 
    {{ data.from_date }}م
    </label>

    <!-- End Date -->
    <label
      class="absolute to bg-white px-3 "
    >
     ولغاية {{ data.to_date }}م
    </label>
    <!-- Age or Other Info -->
    <label
      class="absolute hours"
    >
      {{ data.hours }}
    </label>
    <qrcode-vue :value="value"  class="qr" />

  </div>
</div>
</div>

</template>

<script>
import HeaderComponent from "../components/header.vue";
import basurl from "../interceptors/interceptorsDeveloper";

export default {
  components: { HeaderComponent },
  data() {
    return {
      code_certificate: "",
      data: "",
      value: 'https://cabtabuk.tsp.sa', // URL or text to encode in the QR code

    };
  },
  methods: {
    submit() {
       this.value = `https://cabtabuk.tsp.sa/api/certificates/${this.code_certificate}`; 
       basurl
        .get(`certificates/${this.code_certificate}`)
        .then((response) => {
          this.data=response.data.data
          console.log( this.data);
        })
        .catch((error) => {
          this.error = " لا يوجد بيانات";
        });
    
    },
   
    },
  mounted() {
    console.log(this.$route.params.id);
    this.code_certificate = this.$route.params.id;
    this.submit();
  },
};
</script>

<style>
.certificate {
  background-image: url(../assets/certificate.svg);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.name {
  font-family: 'calibri', sans-serif;
  color: #434242;
  font-weight: 700;
}
.qr {
  position: absolute;
  top: 246px;
  left: 366px;
  width: 37px !important;
  height: 38px !important;
}
@media screen and (max-width: 426px) {
  .res {
    font-size: 8px !important;
    top: 114px;
    left: 45px;
    
}
.name {
  font-size: 7px !important;
  top: 114px;
  left: 206px;
  
}
.from {
  font-size: 5.5px !important;
  top: 151px;
  left: 148px;
  font-weight: bolder;
  color: #434242;

}
.to {
  font-size: 5.5px !important;
  top: 151px;
  left: 107px;
  font-weight: bolder;
  color: #434242;

}
.hours {
  font-size: 6.5px !important;
  top: 167px;
  left: 171px;
  font-weight: bolder;
  color: #434242;

}
.qr {
  position: absolute;
  top: 180px;
  left: 278px;
  width: 32px !important;
  height: 34px !important;
  
}
  .box {
    width: 320px;
  }
  
}
@media screen and (min-width: 426px) and (max-width: 769px) {
  .res {
    font-size: 11px !important;
    top: 151px;
    left: 55px;

}
.name {
  font-size: 9px !important;
  top: 152px;
  left: 272px;
}
.from {
  font-size: 8px !important;
  top: 198px;
  left: 195px;
  color: #434242;

}
.to {
  font-size: 8px !important;
        top: 198px;
        left: 136px;
        color: #434242;

}
.hours {
  font-size: 7.5px !important;
  top: 220px;
  left: 226px;
  font-weight: bolder;
  color: #434242;

}
.qr {
  position: absolute;
  top: 244px;
  left: 370px;
  width: 37px !important;
  height: 38px !important;
}
  .box {
    width: 420px;
  }
  
}
@media screen and (min-width: 769px) and (max-width: 2560px) {
  .res {
    font-size: 16px !important;
    top: 51.8%;
    left: 16%;
  }
  .name {
    font-size: 16px !important;
    top: 277px;
    left: 502px;
}
  .from {
    font-size: 15px !important;
    top: 364px;
    left: 380px;
    color: #434242;

}
  .to {
    font-size: 15px !important;
    top: 364px;
    left: 269px;
    color: #434242;

}
.hours {
  font-size: 13.5px !important;
  top: 404px;
  left: 412px;
  font-weight: bolder;
  color: #434242;

}
.qr {
  position: absolute;
  top: 448px;
  left: 678px;
  width: 67px !important;
  height: 65px !important;
}
    .box {
      width: 769px;
    }
  }
</style>
