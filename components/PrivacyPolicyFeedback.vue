<template>
   <div class="privacyPolicy">
    <label class="privacyPolicy__inner">
      <input class="privacyPolicy__checkbox" type="checkbox" name="privacypolicy" v-model='checked' @change="changeState">
      <div class="privacyPolicy__icon">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5L4.5 9.5L10 0.5" stroke="#E77C5A" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="privacyPolicy__text" v-html="text"></div>
    </label>
  </div>
</template>


<script>
  export default {
    props:{
      'text': String
    },
    data(){
      return{
        checked: false,
      }
    },
    methods: {
      changeState(event){
        this.$emit('changeState', this.checked);
      }
    }
  }
</script>

<style lang='scss' scoped>
  .privacyPolicy{
    font-size: 1rem;
  }
  .privacyPolicy__inner{
    position: relative;
  }
  .privacyPolicy__checkbox {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      visibility: hidden;
      &:checked + .privacyPolicy__icon svg{
        display: block;
      }
  }
 
  .privacyPolicy__icon{
    width: 14px;
    height: 14px;
    border: 1px solid var(--color-4);
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .3em 0 0;
    & svg{
      display: none;
      width: 11px;
      height: 11px;
    }
  }
.privacyPolicy__text::v-deep *,
.privacyPolicy__text::v-deep a, 
.privacyPolicy__text::v-deep a:visited{
  margin: 0;
  font-weight: normal;
  font-size: 1.6em;
  line-height: 118%;
  color: var(--color-2);
}

.privacyPolicy__text::v-deep a, 
.privacyPolicy__text::v-deep a:visited{
  font-size: 1em;
}
.privacyPolicy__inner{
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 .9em;
}

@media screen and (max-width: 992px) {
 .privacyPolicy{
    font-size: .85rem;
  }
}
@media screen and (max-width: 768px) {
 .privacyPolicy{
    font-size: .75rem;
  }
}





</style>