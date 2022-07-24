<script setup lang="ts">
import { ref } from 'vue';
const errors = ref<string[]>([]);
let name = ref('');
function handleSave(event: Event) {
  errors.value.splice(0);
  event.preventDefault();
  if (name.value.length <= 0) {
    errors.value.push('name is required.');
  }
}
</script>

<template>
  <div class="form">
    <h1>The Form</h1>
    <form>
      <ul>
        <li v-if="errors.length <= 0">no error</li>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      <label for="name">name</label>
      <input id="name" type="text" name="name" :value="name" @input="event => name = event.target.value" />
      <button @click="handleSave">save</button>
    </form>
  </div>
</template>
