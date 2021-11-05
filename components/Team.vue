<template>
  <section class="team" >
    <div class="container">
      <h2 class="section__title jsTeamReference" v-html="team.title"></h2>
    </div>

    <div class="team__slider-wrap jsTeamTarget" >
      <div v-swiper:mySwiper="swiperOptions">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(employee, index) in team.list" :key="index">
            <figure class="employee">
              <div class="employee__wrpa-img">
                <img class="employee__img" :src="employee.img" :alt="employee.alt ? employee.alt : employee.name" loading="lazy">
              </div>
              <figcaption class="employee__caption">
                <div class="employee__name">{{employee.name}}</div>
                <div class="employee__position">{{employee.position}}</div>
              </figcaption>
            </figure>          
          </li>
        </ul>
      </div>
    </div>

    <div class="swiper-navigation-wrap container">
      <SwiperArrow/>
    </div>
  </section>
</template>

<script>

export default {
  props:{
    team: Object
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        slidesPerView: "auto",
        spaceBetween: 20,
        freemode: true,
        speed: 400,
        grabCursor: true,
        navigation: {
          nextEl: '.team .btn-navigation_next',
          prevEl: '.team .btn-navigation_prev'
        },
        breakpoints: {
          100: {
            slidesPerView: "auto",
            spaceBetween: 10
          },
          768: {
            slidesPerView: "auto",
            spaceBetween: 20
          }
        }
      }
    }
  },
  methods:{
    offsetSlider(){

      function calcOffset(){
        let target = document.querySelector('.jsTeamTarget');
        let reference = document.querySelector('.jsTeamReference');

        if(target){
          target.style.transform = `translate3d(${reference.offsetLeft}px, 0px, 0px)`;
        }
        
      }

      calcOffset();

      window.addEventListener('resize', function(){
        calcOffset();
      });

    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.offsetSlider();
    });
  }
}

</script>

<style lang='scss' scoped>
.team{
  font-size: 1rem;
  margin: 12em 0 7.2em;
}
.employee {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin: 0;    
    &:hover .employee__img{
      filter: grayscale(0);
    }
}
.employee__wrpa-img{
  border: .2px solid var(--color-1);
  border-radius: .4em;
  padding: 4.2em;
  display: inline-block;

}
.employee__img{
  display: block;
  border-radius: 100%;
  max-width: 100%;
  filter: grayscale(1);
  transition: .3s;
}
.swiper-wrapper {
  font-size: 1em;
}
.swiper-slide {
    margin: 0;
    padding: 0;
    &:before{
      display: none;
    }
}
.employee__name{
  font-weight: bold;
  font-size: 2em;
  line-height:120%;
  color: var(--color-8);
  text-align: center;
  margin: 1.3em 0 0;
}
.employee__position{
  font-weight: normal;
  font-size: 2.4em;
  line-height:150%;
  color: var(--color-8);
  text-align: center;
  margin: .54em 0 0;
}
.employee__caption{
  margin: 0;
}
.team__slider-wrap{
  max-width: 1480px;
  margin: 0 0 3.2em;
}
.swiper-wrapper{
  margin: 0;
}
.swiper-slide{
  max-width: 29em;
}

@media screen and (max-width: 1366px) {
  .team{
    font-size: .8rem;
  }
}
@media screen and (max-width: 1250px) {
  .team__slider-wrap{
    max-width: 1465px;
  }
}

@media screen and (max-width: 1100px) {
  .team{
    font-size: .7rem;
  }
}
@media screen and (max-width: 992px) {
  .team{
    font-size: .6rem;
    margin: 5.6em 0 4em;
  }
  .swiper-navigation-wrap{
    display: none;
  }
}
@media screen and (max-width: 768px) {
 .employee__wrpa-img{
    padding: 3.3em;
 }
  .employee__name{
      margin: .6em 0 0;
  }
  .employee__position{
    font-size: 2em;
    margin: .6em 0 0;
  }
}
@media screen and (max-width: 600px) {
 .swiper-slide{
    max-width: 133px;
  }
}
</style>