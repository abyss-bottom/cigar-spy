<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {}
</script>

<style>

html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #fdf6e1;
}
body *,
body *::before,
body *::after {
  box-sizing: border-box;
}

li {
  margin: 0;
  padding: 0;
  display: list-item;
  text-align: -webkit-match-parent;
}
ul, ol {
  list-style: none;
}
</style>