<template>
  <div class="container">
    <h1 class="title">{{contacts.title}}</h1>
    <div class="description" v-html="contacts.description"></div>
    <ul class="contacts-list"  itemscope itemtype="https://schema.org/Organization">
      <meta itemprop="name" content="стройматик">
      <meta itemprop="address" content="Россия">
      <li class="contacts-list__item" :class="{delimiter: index % 4 == 0}" v-for="(item, index) in contacts.list" :key="index"> 
        <div class="office">
          <h2 class="office__title" v-if="item.name">{{item.name}}</h2>
          <div class="office__group-link">
            <svg class="office__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.82667 13.1291C9.74667 16.6666 12.84 19.5541 16.6133 21.3666L19.5467 18.6166C19.9067 18.2791 20.44 18.1666 20.9067 18.3166C22.4 18.7791 24.0133 19.0291 25.6667 19.0291C26.4 19.0291 27 19.5916 27 20.2791V24.6416C27 25.3291 26.4 25.8916 25.6667 25.8916C13.1467 25.8916 3 16.3791 3 4.6416C3 3.9541 3.6 3.3916 4.33333 3.3916H9C9.73333 3.3916 10.3333 3.9541 10.3333 4.6416C10.3333 6.2041 10.6 7.7041 11.0933 9.1041C11.24 9.5416 11.1333 10.0291 10.76 10.3791L7.82667 13.1291Z" fill="#413F3E"/>
            </svg>
            <a :href="'tel:+' + phone.replace(/\D/g, '')" class="office__link" itemprop="telephone" v-for="(phone, index) in item.phone_list" :key="'phone'+index">
              <span>{{phone}}</span>
            </a>
          </div>
          <div class="office__group-link">
            <svg class="office__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.6 5.3916H5.4C4.0764 5.3916 3 6.51285 3 7.8916V22.8916C3 24.2704 4.0764 25.3916 5.4 25.3916H24.6C25.9236 25.3916 27 24.2704 27 22.8916V7.8916C27 6.51285 25.9236 5.3916 24.6 5.3916ZM24.6 7.8916V8.53035L15 16.3091L5.4 8.5316V7.8916H24.6ZM5.4 22.8916V11.6966L14.2632 18.8779C14.4733 19.0498 14.7328 19.1432 15 19.1432C15.2672 19.1432 15.5267 19.0498 15.7368 18.8779L24.6 11.6966L24.6024 22.8916H5.4Z" fill="#2F2D2C"/>
              </svg>
            <a :href="'mailto:' + email" class="office__link" itemprop="email" v-for="(email, index) in item.email_list" :key="'email' + index">
              <span>{{email}}</span>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props:{
    contacts: Object
  }
}

</script>

<style lang='scss' scoped>
.title{
  margin: 1.45em 0 .46em;
}
.description{
  margin: 0 0 1.875em;
}
.description::v-deep p{
  margin: 0;
}
.office{
  font-size: 1rem;
}
.office__title{
  font-size: 2.4em;
  line-height: 120%;
  margin: 0 0 1.2em;
  text-transform: uppercase;
}
.contacts-list{
  font-size: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 2em;
  margin: 0;
  overflow: hidden;
}
.contacts-list__item{
  position: relative;
  padding: 4.9em 0;
  margin: 0;
  &:before{
    display: none;
  }
}
.office__link, .office__link:visited{
  font-size: 1.8em;
  line-height: 122%;
  color: var(--color-2);
  text-decoration: none;
  margin: 0 0 .5em;
  font-weight: normal;
  display: block;
  &:last-of-type{
    margin: 0;
  }
}
.office__icon{
  display: block;
  width: 3em;
  height: 3em;
  position: absolute;
  top: 0;
  left: 0;
}
.office__group-link{
  position: relative;
  padding: 0 0 0 4.5em;
  margin: 0 0 2.9em;
  &:last-of-type{
    margin: 0;
  }
}
.delimiter:after{
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(400% + 6em);
  height: 1px;
  background: var(--color-5);
}
@media screen and (max-width: 1100px) {
  .office, .contacts-list{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .office, .contacts-list{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .office, .contacts-list{
    font-size: 0.6rem;
  }
  .contacts-list{
    grid-template-columns: repeat(3, 1fr);
  }
  .delimiter:after{
    display: none;
  }
  .office__link, 
  .office__link:visited {
    font-size: 2.2em;
  }
}
@media screen and (max-width: 600px) {
  .office, .contacts-list{
    font-size: 0.5rem;
  }
  .office__link, 
  .office__link:visited {
    font-size: 2.4em;
  }
  .contacts-list{
    grid-template-columns: repeat(2, 1fr);
  }
  .contacts-list__item{
    padding: 2em 0;
  }
  .office__group-link{
    padding: 0 0 0 4em;
    margin: 0 0 2em;
  }
}
</style>