<template>
  <div class="video container">
    <div class="video__text" v-html="video.text"></div>
    <button class="video__btn" type="button" @click="showVideo(video.video_id)">
      <img class="video__img" :src="`http://img.youtube.com/vi/${video.video_id}/sddefault.jpg`" alt="обложка для видео" loading="lazy">
      <svg class="video__icon" width="88" height="51" viewBox="0 0 88 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="88" height="51" rx="4" />
        <g filter="url(#filter0_i)">
        <path d="M65.6821 24.4364C66.4365 24.8001 66.4365 25.8744 65.6821 26.238L36.4081 40.3498C35.7441 40.6698 34.9739 40.1861 34.9739 39.449L34.9739 11.2255C34.9739 10.4884 35.7441 10.0046 36.4081 10.3247L65.6821 24.4364Z" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_i" x="34.9727" y="10.2241" width="33.274" height="33.226" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="4"/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.5625 0 0 0 0 0.145312 0 0 0 0 0.145312 0 0 0 0.68 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
      </svg>
    </button>
  </div>
</template>

<script>

export default {
  props:{
    video: Object
  },
  methods:{
    showVideo(videoId){
      let item = {
        'videoId': videoId,
        'nameModal': 'modalVideo'
      }
      this.$store.commit('showModalVideo', item);
    }
  }
}

</script>

<style lang='scss' scoped>
.video{
  font-size: 1rem;
  display: grid;
  grid-template-columns: 7fr 4fr;
  grid-gap: 0 11.8em;
  align-items: center;
  padding: 0 15px;
  margin: 0 auto 17em;
}
.video__text::v-deep *{
  font-size: 2.4em;
  line-height: 120%;
  color: #2F2D2C;
  margin: 0 0 1em;
  &:last-child{
    margin: 0;
  }
}

.video__btn{
  position: relative;
  display: block;
  background: none;
  border: none;
  padding: 0;
  font-size: 1em;
  width: 100%;
  grid-column: 1;
  grid-row: 1;
  &:hover .video__icon,
  &:focus .video__icon{
    fill: var(--color-3);
  }
}
.video__img{
  display: block;
  width: 100%;
  border-radius: 0.4em;
  max-height: 39.3em;
  object-fit: cover;
}
.video__icon{
  display: block;
  width: 8.8em;
  height: 5.1em;
  position: absolute;
  top: calc(50% - (5.1em / 2));
  left: calc(50% - (8.8em / 2));
  fill: var(--color-1);
  transition: .3s;

}

@media screen and (max-width: 1100px) {
  .video{
    font-size: .8rem;
  }

}
@media screen and (max-width: 992px) {
  .video{
    font-size: .7rem;
  }

}
@media screen and (max-width: 768px) {
  .video{
    font-size: 0.6rem;
  }


}
@media screen and (max-width: 600px) {
  .video{
    font-size: 0.5rem;
    grid-template-columns: 1fr;
    margin: 0 auto 12em;
    grid-gap: 6.8em 0;
  }
  .video__text{
    text-align: center;
  }
  .video__text::v-deep *{
    font-size: 3.6em;
    text-transform: uppercase;
  }
  .video__img{
    max-height: 37em;
  }
  .video__btn{
      grid-row: 2;
  }
}
</style>