<template>
  <div class="v-create-user">
    <h1 class="v-create-user__title">Create User</h1>
    <div class="v-create-user__form">
      <form id="form" class="v-login__form-body" @submit.prevent="formSubmit">
        <div class="v-create-user__form-body-item">
          <input
            v-model="name"
            id="formName"
            placeholder="Name"
            type="text"
            class="v-create-user__form-body-item-input"
            name="name"
          />
        </div>
        <div class="v-create-user__form-body-item">
          <input
            v-model="surname"
            id="formSurname"
            placeholder="Surname"
            type="text"
            class="v-create-user__form-body-item-input"
            name="surname"
          />
        </div>
        <button
          @click="createUser"
          type="button"
          class="v-create-user__form-body-button"
        >
          Create
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  el: "#form",
  name: "v-create-user",
  components: {},
  props: {},
  data() {
    return {
      name: "",
      surname: "",
    };
  },
  computed: {
    createData() {
      return {
        name: this.name,
        surname: this.surname,
      };
    },
  },
  methods: {
    async createUser() {
      try {
        const result = await axios.post("/user", this.createData)
        this.name = ""
        this.surname = ""
        setTimeout(() => {
          alert(`The user was created with id: ${result.data.id}`);
        }, 100);
      } catch(err) {
        setTimeout(() => {
          alert(err.response.data.message)
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-create-user {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
  font-size: 20px;
  color: rgb(198, 148, 0);

  &__title {
    font-size: 32px;
    color: rgb(198, 148, 0);
    font-weight: 700;
    font-family: Snell Roundhand, cursive;
  }

  &__form {
    width: 350px;
    &-body {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;

      &-item {
        width: 100%;
        &-input {
          width: 310px;
          font-size: 16px;
          height: 50px;
          padding: 0 20px;
          border-radius: 5px;
          transition: all 0.5s ease 0s;
        }
        &-input:focus {
          box-shadow: 0 0 15px rgb(198, 148, 0);
        }
      }

      &-button {
        width: 100%;
        margin: 0 auto;
        min-height: 60px;
        font-size: 18px;
        border-radius: 20px;
        letter-spacing: 2px;
        text-transform: uppercase;
        background-color: rgb(198, 148, 0);
        color: #000000;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 5px 0 #161b13;
        transition: background-color 0.5s ease 0s;
        position: relative;
        top: 0;
      }

      &-button:hover {
        background-color: rgb(198, 148, 0);
      }
      &-button:active {
        top: 3px;
        box-shadow: 0 2px #161b13;
      }
    }
  }

}
</style>
