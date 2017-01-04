<template>
  <footer class="footer">
    <div class="flex-between container">
      <div class="footer-left">
        <nuxt-link class="unstyle" to="/">
          <h2 class="thin m-0">BikeCheck</h2>
        </nuxt-link>
        <div class="footer-links">
          <nuxt-link class="el-button el-button--text el-button--small" to="/contact">Contact</nuxt-link>
          <nuxt-link class="el-button el-button--text el-button--small" to="/about">About</nuxt-link>
          <nuxt-link class="el-button el-button--text el-button--small" to="/promotion">Promotion</nuxt-link>
        </div>
      </div>
      <div class="footer-right">
        <img class="powered-by" src="../assets/img/poweredbystrava.svg"></img>
      </div>
    </div>
  </footer>
</template>

