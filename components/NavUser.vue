<template>
  <div class="nav-item">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link img-dropdown">
        <img class="small circle" :src="$store.state.user.avatar"></img>
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu class="text-center" slot="dropdown">
        <el-dropdown-item style="color:gray" :disabled="true">
          {{ name }}
        </el-dropdown-item>

        <nuxt-link class="unstyle" to="/dashboard">
          <el-dropdown-item :divided="true">
            Dashboard
          </el-dropdown-item>
        </nuxt-link>

        <nuxt-link class="unstyle" to="/settings">
          <el-dropdown-item>
            Settings
          </el-dropdown-item>
        </nuxt-link>

        <div @click="$store.dispatch('logout')">
          <el-dropdown-item>
            Logout
          </el-dropdown-item>
        </div>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    computed: {
      avatar () {
        return this.$store.state.user.avatar
      },
      name () {
        return this.$store.state.user.name
      }
    },
  }
</script>
