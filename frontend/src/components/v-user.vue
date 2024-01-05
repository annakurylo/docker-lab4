<template>
  <div v-if="!isError" class="v-user">
    <h1 class="v-user__title">User Information</h1>
    <div class="v-user__form">
      <form id="form" class="v-user__form-body" @submit.prevent="formSubmit">
        <div class="v-user__form-body-item">
          <input
            v-model="id"
            id="formId"
            :disabled="true"
            placeholder="Id"
            type="text"
            class="v-user__form-body-item-input"
            name="id"
          />
        </div>
        
        <div class="v-user__form-body-item">
          <input
            v-model="name"
            id="formName"
            placeholder="Name"
            type="text"
            class="v-user__form-body-item-input"
            name="name"
          />
        </div>

        <div class="v-user__form-body-item">
          <input
            v-model="surname"
            id="formSurname"
            placeholder="Surname"
            type="text"
            class="v-user__form-body-item-input"
            name="surname"
          />
        </div>

        <button
          @click="updateUser"
          type="button"
          class="v-user__form-body-button"
        >
          Update
        </button>
        <button
          @click="deleteUser"
          type="button"
          class="v-user__form-body-button"
        >
          Delete
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "v-user",
  components: {},
  props: {},
  data() {
    return {
      id: this.$route.params.id,
      name: "",
      surname: "",
    };
  },
  computed: {
    updateData() {
      return {
        id: this.id,
        name: this.name,
        surname: this.surname,
      };
    },
  },
  methods: {
    async deleteUser() {
      const result = await axios.delete(
          `/user/${this.id}`
        );

        if (result.data.status === "fail" && result.data.message) {
          alert(result.data.message);
        } else {
          setTimeout(() => {
          alert("The user was deleted");
          this.name = ""
          this.surname = ""
          this.id = ""
          this.$router.go(-1);
        }, 100);
        }

    },
    async updateUser() {
        const result = await axios.put(
          `/user`,
          this.updateData
        );

        if (result.data.status === "fail" && result.data.message) {
          alert(result.data.message);
        } else {
          this.name = "";
          this.surname = "";
          this.id = "";
        }
        setTimeout(() => {
          alert("The user was edited");
          this.$router.go();
        }, 100);
      }
    },
  async created() {
    try {
      const user = await axios.get(`/user/${this.id}`);
      console.log(user)
      this.name = user.data.name;
      this.surname = user.data.surname

    } catch (err) {
      setTimeout(() => {
        alert(err.response.data.message);
      }, 500);
    }
  },
};
</script>

<style lang="scss" scoped>
.v-user {
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

        &-radiobtn {
            border-radius: 5px;
            height: 50px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            color: rgb(255, 255, 255);

            &-value{

            }
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

  &__login {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &-isAccount {
    }

    &-btn {
      background-color: rgb(198, 148, 0);
      border: none;
      padding: 5px 15px;
      border-radius: 10px;
      box-shadow: 0 5px 0 #161b13;
      transition: background-color 0.5s ease 0s;
      position: relative;
      top: 0;
    }
    &-btn:active {
      top: 3px;
      box-shadow: 0 2px #161b13;
    }
  }
}

*:disabled {
  background-color: white;
  color: rgb(0, 0, 0);
  opacity: 1;
}

.pib {
  border: 2px solid red;
}
.phone {
  border: 2px solid red;
}
.pasport {
  border: 2px solid red;
}
.faculty {
  border: 2px solid red;
}
.email {
  border: 2px solid red;
}
.birthday {
  border: 2px solid red;
}

.password {
  border: 2px solid red;
}

.btn {
  text-decoration: none;
  color: #000000;
  width: 100%;
}
a {
  width: 100%;
}


fieldset {
    border: 0;
}

input[type='radio'] {
    -webkit-appearance:none;
    width:15px;
    height:15px;
    border:1px solid darkgray;
    border-radius:50%;
    outline:none;
    box-shadow:0 0 5px 0px gray inset;
    margin: 0 10px 0 0;
}
input[type='radio']:hover {
    box-shadow:0 0 5px 0px orange inset;
}
input[type='radio']:before {
    content:'';
    display:block;
    width:100%;
    height:100%;
    /*margin: 20% auto;    */
    border-radius:50%;    
}
input[type='radio']:checked:before {
    background:rgb(198, 148, 0);
}

input[type='radio']:before {
    content:'';
    display:block;
    width:100%;
    height:100%;
    /*margin: 20% auto;    */
    border-radius:50%;    
}
</style>
