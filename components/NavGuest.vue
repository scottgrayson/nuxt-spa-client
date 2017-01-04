<template>
  <div class="nav-item">
    <el-button class="button-img" @click.once="$store.dispatch('authRedirect')">
      <img class="hidden-xs-down" src="../assets/img/connectwithstrava.svg"></img>
      <img class="hidden-sm-up" src="../assets/img/strava.png"></img>
    </el-button>
  </div>
</template>
