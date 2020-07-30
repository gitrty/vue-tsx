<template>
  <div>
    <div>{{ message }}{{ newMessage }}</div>
    <div class="red"></div>
  </div>
</template>
<script src="./" lang="ts"></script>
<style lang="scss">
.red {
  background-color: red;
  // color: $color;
  @include flex;
}
</style>
