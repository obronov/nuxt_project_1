<template>
  <div class="video">
    <button class="video__btn" v-if="video.video_id" type="button" @click="showVideo(video.video_id)">
      <img class="video__img" :src="`http://img.youtube.com/vi/${video.video_id}/hqdefault.jpg`" :alt="video.title">
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
    <div class="video__info">
      <NuxtLink class="video__hashtag" :to="`/about/blog/?handle=${item.alias}`" v-for="(item, index) in video.hashtag_list" :key="index">
        {{item.title}}
      </NuxtLink>
      <time class="video__time" 
        :datetime="dateTimeFormat(video)">
        {{ new Date(video.date * 1000).toLocaleString('ru', {year: 'numeric', month: 'long', day:'numeric'}) }}
      </time>
    </div>
    <NuxtLink class="video__title" :to="'/about/blog/' + video.alias">
      <div v-if="video.title">{{video.title}}</div>
      <div v-if="video.subtitle">{{video.subtitle}}</div>
    </NuxtLink>
  </div>
</template>

<script>

export default {
  props:{
    video: Object
  },
  methods:{
    dateTimeFormat(item){
      let date = new Date(item.date * 1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day:'numeric'});
      let arrDate = date.split(".");

      return arrDate[2] + '-' + arrDate[1] + '-' + arrDate[0];
    },
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
}
.video__btn{
  position: relative;
  display: block;
  background: none;
  border: none;
  padding: 0;
  font-size: 1rem;
  width: 100%;
  &:hover .video__icon,
  &:focus .video__icon{
    fill: var(--color-3);
  }
}
.video__img{
  display: block;
  width: 100%;
  border-radius: 0.4em;
  max-height: 212px;
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
.video__hashtag, .video__hashtag:visited{
  text-decoration: none;
  font-size: 1.6em;
  line-height: 118%;
  color: var(--color-1);
  margin: 0 .6em;
}
.video__time{
  font-size: 1.6em;
  line-height: 118%;
  color: var(--color-4);
  margin: 0 .6em;
}
.video__title, .video__title:visited{
  text-decoration: none;
  font-size: 2.4em;
  line-height: 150%;
  color: var( --color-2);
  display: block;
}
.video__info{
  display: flex;
  flex-flow: row wrap;  
  margin: 1.3em -1em 1.9em;
}

@media screen and (max-width: 1100px) {
  .video, .video__btn{
    font-size: .8rem;
  }
  .video__img{
    max-height: 180px;
  }
}
@media screen and (max-width: 992px) {
  .video, .video__btn{
    font-size: .7rem;
  }
  .video__hashtag, .video__hashtag:visited, .video__time {
    font-size: 2em;
    line-height: 140%;
  }
}
@media screen and (max-width: 768px) {
  .video, .video__btn{
    font-size: 0.6rem;
  }
  .video__info{
    margin: 1.9em -1em 2.3em;
  }

}
@media screen and (max-width: 600px) {
  .video__hashtag, .video__hashtag:visited, .video__time {
    font-size: 2.4em;
  }
  .video, .video__btn{
    font-size: 0.5rem;
  }
  .video__img{
    max-height: 130px;
  }
}

</style>