<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Hello {{myName}}</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  computed: {
    myName() {
      return this.$store.state.name || 'someone';
    }
  }
})
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
