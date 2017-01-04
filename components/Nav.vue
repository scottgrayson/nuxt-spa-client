<template>
  <div class="top-nav">
    <div class="flex-between container">
      <div class="nav-left">
        <nuxt-link to="/" class="unstyle">
          <div class="nav-item">
            <img src="../assets/img/fork.svg" class="logo-img"></img>
            <h1 class="logo-text">BikeCheck</h1>
          </div>
        </nuxt-link>
      </div>
      <div class="nav-right">
        <nav-user v-if="$store.state.user"></nav-user>

        <nav-guest v-else></nav-guest>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import NavGuest from '~components/NavGuest.vue'
import NavUser from '~components/NavUser.vue'

export default {
  components: {
    NavGuest,
    NavUser
  }
}
</script>
