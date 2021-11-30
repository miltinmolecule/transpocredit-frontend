<template>
  <div class="available-card">
    <div class="img-wrapper">
      <img src="@/assets/images/svgs/available-car.svg" alt="" />
    </div>
    <div class="card-content px-3">
      <div>
        <h4>Toyota Hatchbacks</h4>
        <p>Hatchbacks</p>
        <p>#5,000,000</p>
      </div>
      <span>
        <svg
          width="15"
          height="20"
          viewBox="0 0 15 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6">
            <mask
              id="mask0_413_145"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="15"
              height="25"
            >
              <path
                d="M0 21.4373L9.27125 12.1458L0 2.85425L2.85425 0L15 12.1458L2.85425 24.2915L0 21.4373Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_413_145)">
              <rect
                x="-17.3882"
                y="-13.664"
                width="48.583"
                height="48.583"
                fill="#653737"
              />
            </g>
          </g>
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.available-card {
  padding: 10px;
  display: flex;
  cursor: pointer;
  box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;
  .img-wrapper {
    // width: 185px;
    // height: 96px;
    width: 155px;
    height: 81px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .card-content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
    h4 {
      font-size: 1rem;
      // font-size: 1.3rem;
      font-family: Poppins;
      margin: 0px;
    }
    p {
      font-family: Poppins;
      margin-bottom: 6px;
      font-size: 12px;
      &:nth-child(2n + 1) {
        font-weight: bold;
        font-size: 14px;
        margin: 0px;
      }
    }
  }
}
</style>