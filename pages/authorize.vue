<template>
  <div class="text-center">
    <p class="loading-text">Connecting with Strava</p>
    <div class="spinner">
      <div class="orange bounce1"></div>
      <div class="orange bounce2"></div>
      <div class="orange bounce3"></div>
    </div>
    <div>
</template>

<script>
  export default {
    layout: 'blank',
    data () {
      return {
        code: null
      }
    },
    created () {
      this.code = this.$nuxt.$route.query.code
      this.$store.dispatch('login', { code: this.code })
        .catch((e) => {
          console.log(e)
        })
    }
  }
</script>

<style>
.spinner > div.orange {
  background-color: #fc4c02;
}

.loading-text {
  font-size: 1.5em;
  font-weight: 300;
  margin-top: 100px;
}

.spinner {
  margin: 50px auto 0;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: #333;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
</style>
