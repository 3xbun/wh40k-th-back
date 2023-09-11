<template>
  <router-link :to="link">
    <li>
      <div class="left">
        <img v-if="logo" :src="logo" alt="logo">
        {{ title }}
      </div>
      <ion-icon name="caret-forward-outline"></ion-icon>
    </li>
  </router-link>
</template>

<script setup>
const props = defineProps({
  title: String,
  logo: String,
  link: String
})

// const { link } = toRefs(props);

// const linkFormat = "/" + props

console.log(props.link);
</script>

<style scoped>
.left {
  height: 2em;
  display: flex;
  align-items: center;
  gap: .5em;
}

img {
  height: 100%;
  filter: brightness(0);
}

li {
  background-color: var(--white);
  border-radius: 1em;
  color: black;
  font-weight: bold;
  padding: .5em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .5em 0;
}
</style>