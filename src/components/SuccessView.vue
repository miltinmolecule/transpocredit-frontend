<template>
  <div class="container">
    <div class="wrapper">
      <div class="content">
        <h2>Congratulations!</h2>
        <div class="img-wrapper">
          <img src="@/assets/img/success.svg" alt="" />
        </div>
        <div class="message">
          <p>
            TranspoCredit say welcome to new life. we will get to you shortly on
            you new car
          </p>
        </div>
        <div class="content--button">
          <b-button class="" block variant="primary" @click="goTo"
            >Continue to dashbaord</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #653737;
  .content {
    width: 100%;
    margin: auto;
    .img-wrapper {
      img {
        height: 100%;
        width: 100%;
      }
    }
    h2 {
      font-weight: bold;
      font-size: 2em;
      margin-bottom: 2.5rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .message {
      width: 345px;
      margin: auto;
      p {
        margin-top: 3rem;
      }
    }
    &--button {
      width: 70%;
      margin: auto;
      button {
        margin-top: 3rem;
        font-size: 14px;
      }
    }
  }
  .img-wrapper {
    width: 60%;
    margin: 3em auto;
  }
}
</style>