<template>
  <div class="masthead">
     <!-- :style="`background:${bkcolor}`" -->
    <div class="logo">
      <img class="ppl-banner" src="https://res.cloudinary.com/orthodox-union/image/upload/f_auto,q_auto/v1596533358/OU/logos/ou_logo_simple_w1.png" alt="Banner Image">
      <span class="logo-title">OUINTRANET</span>
    </div>
    
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    bkcolor: {
      type: String,
      default: '#3b60ed'
    },
    title: {
      type: String,
      default: 'OUIntranet Emails'
    },
    img: {
      type: String,
      default: 'logo-email'
    }
  }
};
</script>

<style scoped>
h1 {
  color: white;
  font-size: 60px;
  padding: 8px;
}

.bk {

}

.ppl-banner {
 width: 47px;
 padding-right: 5px;
}

.logo{
    align-items: center;
  display: flex;
}
.logo-title{
    color: white;
    font-weight: bold;
    font-size: 20px;
}
.masthead {
  padding: 10px;
  width: 100%;
  color: white;
  align-items: center;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  margin: 10px 0;
  background-image: url('https://res.cloudinary.com/orthodox-union/image/upload/q_auto,b_black,o_80/v1596532898/OU/general-email/Screen_Shot_2020-08-04_at_12.21.01.jpg');
  background-position: center;
  background-size: cover;
}
@media (max-width: 480px) {
  .logo{
    justify-content: center;
    width: 100%;
  }
  h1{
    font-size: 30px;
    text-align: center;
    width: 100%;
    margin-top: 10px;
  }
}
</style>