<template>
  <div class="v-navigation">
    <div class="v-navigation__container">
      <div class="v-navigation__container-nav">
        <router-link :to="{ name: 'main' }">
          <a href="">Main Page</a>
        </router-link>
        <router-link :to="{ name: 'create' }">
          <a href="">Create User</a>
        </router-link>
        <router-link :to="{ name: 'users' }">
          <a href="">All Users</a>
        </router-link>
        <router-link :to="{ name: 'professions' }">
          <a href="">Professions</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-navigation",
  props: {},
};
</script>

<style lang="scss" scoped>
.v-navigation {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 25;
  height: 50px;

  &__container {
    margin: 0 auto;
    padding: 0 10%;
    background-color: rgb(198, 148, 0);
    height: 100%;

    &-nav {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}

a:not(:last-child) {
  margin-right: 20px;
}
a:hover {
  color: rgb(255, 255, 255);
}
a {
  font-size: 20px;
  color: rgb(0, 0, 0);
  font-weight: 700;
  text-decoration: none;
  //font-style: italic;
  font-size: 16px;
}
</style>
