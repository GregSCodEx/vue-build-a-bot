<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open">&#x25B2; Collaps</span>
      <span v-if="!open" @click="open = !open">&#x25Bc; Expand</span>
    </div>
    <slot v-if="open">
      <div>Default</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return { open: true };
  },
};
</script>

<style scoped>
.header {
  background-color: #bbbbbb;
  padding: 3px;
  cursor: pointer;
}
</style>
