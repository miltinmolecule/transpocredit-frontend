<template>
  <div class="wrap-testimonial">
    <div class="content-detail">
      <span class="-icon"><i class="quote-icon"></i></span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, nulla sit
        malesuada ullamcorper elit non lobortis pharetra viverra. Orci, dui
        scelerisque consequat magna quis porttitor. Turpis sed ullamcorper est
        nunc arcu odio. Vel malesuada sit blandit leo faucibus mi quam amet.
        Faucibus interdum nisl at a morbi id. Laoreet mi turpis vulputate
        consequat. Phasellus suspendisse eget elementum interdum. Suspendisse
        enim diam at donec tellus eu,˝
      </p>
      <div class="info-detail">
        <h5>Gregory Newton</h5>
        <p>CEO Drive Well</p>
      </div>
    </div>
    <div class="line-users">
      <ul>
        <li>
          <div class="user-img">
            <img src="@/assets/img/avatar/avatar-1.jpg" alt="" />
          </div>
        </li>
        <li>
          <div class="user-img">
            <img src="@/assets/img/avatar/avatar-1.jpg" alt="" />
          </div>
        </li>
        <li>
          <div class="user-img">
            <img src="@/assets/img/avatar/avatar-1.jpg" alt="" />
          </div>
        </li>
        <li class="selected">
          <div class="user-img">
            <img src="@/assets/img/avatar/avatar-1.jpg" alt="" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.content-detail {
  width: 70%;
  max-width: 760px;
  box-shadow: $card-shadow;
  border-radius: 4px;
  overflow: hidden;
  padding: 3em;
  min-height: 450px;
  .-icon {
    margin: 1em 0;
  }
  p {
    margin-bottom: 2.5em;
    font-weight: 300;
  }
}
.info-detail {
  p {
    color: $primary-color;
  }
}
.wrap-testimonial {
  display: flex;
  align-items: center;
  justify-content: center;
}
.line-users {
  // background: #ccc;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    li {
      position: relative;
      &.selected {
        &::before {
          content: "";
          height: 40px;
          width: 40px;
          background-image: url("../assets/img/custom-caret.svg");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          position: absolute;
          left: -30px;
          top: 40%;
        }
        .user-img {
          width: 150px;
          height: 150px;
          margin: 5px 0;
        }
      }
    }
  }
}

.user-img {
  width: 78px;
  height: 78px;
  border-radius: 100%;
  overflow: hidden;
  margin: 10px 0;
  transition: $transition-medium;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (max-width: 860px) {
  .wrap-testimonial {
    display: block;
    .content-detail {
      width: 100%;
    }
  }
  .line-users {
    ul {
      display: none;
    }
  }
}
</style>