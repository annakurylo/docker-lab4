<template>
  <div class="v-profession">
    <div class="v-profession__title">Professions</div>
    <div class="search-fieled">
      <input type="text" v-model="searchValue" />
      <button class="search_btn">
        <menu-icon> magnify </menu-icon>
      </button>
    </div>
    <div class="v-profession__list">
      <div
        v-for="profession of filterProfessions"
        :key="profession.id"
        class="v-profession__list-card"
      >
        <div class="v-profession__list-card-name">
          {{ profession.name }}
        </div>
        <button class="btn" @click="deleteProfession(profession._id)">
          Delete
        </button>
      </div>
      <div class="create-fieled">
        <input
          type="text"
          v-model="newProfession"
          class="create-fieled-inp"
          placeholder="Input profession"
        />
        <button class="create-fieled-btn btn" @click="createProfession()">
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Magnify.vue";
import axios from "axios";
export default {
  name: "v-profession",
  props: {},
  components: {
    MenuIcon,
  },
  data() {
    return {
      professions: [],
      searchValue: "",
      newProfession: "",
    };
  },

  computed: {
    filterProfessions() {
      return this.professions.filter((profession) =>
        profession.name.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
    createData() {
      return {
        name: this.newProfession,
      };
    },
  },
  methods: {
    async createProfession() {
      try {
        await axios.post("/profession", this.createData);
        this.newProfession = "";
        setTimeout(() => {
          alert(`The Profession was created`);
          this.$router.go();
        }, 100);
      } catch (err) {
        setTimeout(() => {
          alert(err.response.data.message);
        }, 500);
      }
    },
    async deleteProfession(id) {
      try {
        await axios.delete(`/profession/${id}`);
        this.$router.go();
      } catch (err) {
        setTimeout(() => {
          alert(err.response.data.message);
        }, 500);
      }
    },
  },
  async created() {
    try {
      const professions = await axios.get("/profession");
      this.professions = professions.data;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 5px 10px;
  background-color: rgb(198, 148, 0);
  //color: white;
}
.create-fieled {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 540px;
  //padding: 10px 20px;
  position: relative;

  input {
    border: 5px solid green;
    padding: 12px 15px;
    width: 100%;
    font-size: 20px;
  }
  &-btn {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0%, -50%);
    background-color: green;
  }
}
.search-fieled {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  padding: 10px 20px;
  background-color: rgb(198, 148, 0);

  input {
    padding: 10px 20px;
    min-width: 300px;
  }
}
.search_btn {
  margin-left: 16px;
  background: transparent;
  border: none;
}
.v-profession {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  font-size: 20px;
  color: rgb(198, 148, 0);
  &__title {
    font-size: 32px;
    color: rgb(198, 148, 0);
    font-weight: 700;
    font-family: Snell Roundhand, cursive;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    &-card {
      box-shadow: 0 0 8px 0 #e0e0e0;
      min-width: 500px;
      background-color: white;

      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      &-name {
        color: black;
      }
    }
  }
}
</style>
