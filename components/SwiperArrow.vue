<template>
  <div class="swiper-navigation">
    <button class="btn-navigation btn-navigation_prev" type="button">
      <svg width="45" height="13" viewBox="0 0 46 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.8669 6.99966C45.1877 6.67887 45.1877 6.15877 44.8669 5.83799L39.6394 0.610446C39.3186 0.289659 38.7985 0.289659 38.4777 0.610446C38.1569 0.931234 38.1569 1.45133 38.4777 1.77212L43.1244 6.41882L38.4777 11.0655C38.1569 11.3863 38.1569 11.9064 38.4777 12.2272C38.7985 12.548 39.3186 12.548 39.6394 12.2272L44.8669 6.99966ZM0.476562 7.24025H44.2861V5.59739H0.476562V7.24025Z"/>
      </svg>
    </button>
    <button class="btn-navigation btn-navigation_next" type="button">
      <svg width="45" height="13" viewBox="0 0 46 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.8669 6.99966C45.1877 6.67887 45.1877 6.15877 44.8669 5.83799L39.6394 0.610446C39.3186 0.289659 38.7985 0.289659 38.4777 0.610446C38.1569 0.931234 38.1569 1.45133 38.4777 1.77212L43.1244 6.41882L38.4777 11.0655C38.1569 11.3863 38.1569 11.9064 38.4777 12.2272C38.7985 12.548 39.3186 12.548 39.6394 12.2272L44.8669 6.99966ZM0.476562 7.24025H44.2861V5.59739H0.476562V7.24025Z"/>
      </svg>
    </button>
  </div>
</template>

<script>

export default {

}

</script>

<style lang='scss' scoped>
.swiper-navigation{
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0 5.3em;
  justify-content: end;
}

.btn-navigation{
  font-size: 1em;
  width: 4.5em;
  height: 1.3em;
  background: none;
  padding: 0;
  border: none;  
}
.btn-navigation_prev{
  transform: rotate(180deg);
}
.btn-navigation svg{
  display: block;
  width: 100%;
  height: 100%;
  fill: #2F2D2C;
  transition: .3s;
}

.btn-navigation.swiper-button-disabled svg{ 
  opacity: .5;
}
</style>