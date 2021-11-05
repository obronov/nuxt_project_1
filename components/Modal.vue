<template>

  <div class="modal" @click.self="closeModal">
    <div class="modal-container" :style="{'--widthModal': (maxWidth) ? maxWidth + 'px' : '834px' }">
      <div class="modal-header">
        <button class="modal-btnClose" type="button" title='Закрыть' @click="closeModal">
          <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6446 28.2304L0 51.875L4.58575 56.4608L28.2304 32.8161L51.875 56.4608L56.4608 51.875L32.8161 28.2304L56.4608 4.58575L51.875 0L28.2304 23.6446L4.58575 0L0 4.58575L23.6446 28.2304Z" fill="white"/>
          </svg>
        </button>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    maxWidth: Number
  },
  methods:{
    closeModal(){
      this.$store.commit('closeModal')
    }
  }
}

</script>

<style lang='scss' scoped>
.modal{
  background: var(--bgModal);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 15px 10.6em;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 100vh;  
  font-size: 1rem;
}
.modal-content {
  max-height: calc(100vh - 10em);
  overflow-y: auto;
}
.modal-container{
  max-width: var(--widthModal);
  width: 100%;  
  margin: 6em 0 0;
}
.modal-header{
  position: relative;
}

.modal-btnClose{
  width: 5.6em;
  height: 5.6em;
  border: none;
  background: none;
  padding: 0;
  font-size: 1em;
  position: absolute;
  top: -7.6em;
  right: -7.6em;

}
.modal-btnClose svg{
  display: block;
  width: 100%;
  height: 100%;
}
.modal__text{
  font-family: 'TT Norms', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 4.2em;
  line-height: 140%;
  color: #162E68;
  align-self: start;
  text-align: center;
}
.modal__icon{
  width: 7.6em;
  height: 6.5em;
  display: block;
  stroke: #162E68;
}
@media screen and (max-width: 1366px){
  .modal{
    font-size: .9rem;
  }
}

@media screen and (max-width: 992px){
  .modal{
    font-size: .6rem;
    padding: 15px;
  }
  .modal-btnClose{
    right: 0;
  }
}

@media screen and (max-width: 576px){
  .modal{
    font-size: .4rem;
  }
}
</style>