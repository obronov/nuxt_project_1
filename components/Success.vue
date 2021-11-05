<template>
  <div class="success">
    <slot></slot>
  </div>
</template>

<script>

export default {

}

</script>

<style lang='scss' scoped>
.success{
  background: var(--color-7);
  box-shadow: 2px 3px 15px rgba(186, 161, 146, 0.25);
  font-size: 2.4em;
  line-height: 121%;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-2);
  min-height: 10em;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 2em 1em;
}
@media screen and (max-width: 576px) {
  .success{
    font-size: 3.5em;
  }
}
</style>