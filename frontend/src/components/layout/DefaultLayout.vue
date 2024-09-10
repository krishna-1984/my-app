<template>
    <HeaderComponent />
    <slot></slot>
    <FooterComponent />
</template>

<script>
import HeaderComponent from '../HeaderComponent.vue'
import FooterComponent from '../HeaderComponent.vue'
export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
