<template>
  <div>
    <header>
    </header>
    <h1>WallHammer 40k References - TH Edition</h1>

    <div class="container">
      <ul>
        <MenuItems title="เริ่มเล่นเลย" link="/quick-start-guide" />
        <MenuItems title="กฏหลัก" link="/core-rules" />
        <hr>
        <div v-for="faction in Factions" :key="faction.title">
          <MenuItems :title="faction.title" :logo="faction.logo" link="" />
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import MenuItems from '../components/MenuItems.vue';

import Factions from '../database/factions'
</script>

<style scoped>
header {
  background: center url(https://www.warhammer-community.com/wp-content/themes/gw-community-2020/download-file.php?file=94124);
}

h1 {
  text-align: center;
}

hr {
  margin: 1em 0;
}
</style>