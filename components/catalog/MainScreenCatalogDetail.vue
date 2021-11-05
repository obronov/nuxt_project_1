<template>
  <div class="main-screen">
    <div class="main-screen__inner">
      <div class="main-screen__model" v-html="info.model_3d"></div>
      <div class="info">
        <h1 class="title" v-if="title" v-html="title"></h1>
        <p class="description" v-if="info.description">{{info.description}}</p>
        <button class="btnCall" type="button" @click="scrollToForm" v-if="info.link_name">{{info.link_name}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global";

export default {
  mixins: [global],
  props:{
    info: Object
  },
  computed:{
    title(){
      try {
        
        let arr = this.info.name.split(' ');

        arr[arr.length - 1] = `<span class='dedicated'>${arr[arr.length - 1]}</span>`;

        let string = arr.join(' ');
        return string;

      } catch (error) {
        console.error(`Страница ${this.$route.fullPath}. Ошибка в заголовке: `,  error)
        return false;
      }

    }
  }
}

</script>

<style lang='scss' scoped>
.main-screen__model {
  height: 100%;
  position: relative;
}

.main-screen{  
  max-width: 1440px;    
  margin: 0 auto;
  position: relative;
  font-size: 1rem;
  overflow: hidden;
}
.main-screen__inner{
  max-width: 1345px;
  margin: 0 0 0 auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0;
}
.info{
  display: grid;
  align-content: center;
  justify-items: start;
  height: 100%;
  grid-column: 1;
  grid-row: 1;
  padding: 9.3em 1.2em 16.4em 1.5em;
  margin: 0 -1.2em 0 0;
  z-index: 10;
}
.title{
  color: var(--color-7);
  margin: 0 0 .516em;
  max-width: 420px;
  text-shadow: 11px 6px 12px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
}
.description{
  color: var(--color-7);
  max-width: 400px;
  margin: 0;
}
.btnCall{
  margin: 3.65em 0 0;
}

@media screen and (max-width: 1200px) {
  .main-screen{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .main-screen{
    font-size: .7rem;
  }
  .title{
    max-width: 370px;
  }
  .description{
    padding: 0 15px 0 0;
  }
}
@media screen and (max-width: 768px) {
  .main-screen{
    font-size: 0.6rem;
  }
  .info{
    position: relative;
    padding: 4em 15px 9.8em;
  }
  .main-screen__model{
    max-width: none;
    width: 100%;
    height: 100vw;
  }
  .main-screen__inner{
    display: block;
  }
}
@media screen and (max-width: 600px) {
  .main-screen{
    font-size: 0.5rem;
  }
  .btnCall{
    margin: 4.2em 0 0;
  }
  .title{
    margin: 0 0 .29em;
    font-size: 3.4rem;
  }
  
  .description{
    font-size: 1.4rem;
    max-width: 100%;
  }
  .info{
    padding: 5.2em 15px 17.4em;
  }
}
</style>