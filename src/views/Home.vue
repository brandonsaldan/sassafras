<template>
  <div class="animate__animated animate__fadeIn">
    <name-header></name-header>
    <bio></bio>
    <grid></grid>
    <divider></divider>
    <spotify-presence></spotify-presence>
  </div>
</template>

<script>

import NameHeader from '../components/NameHeader.vue'
import Bio from '../components/Bio.vue'
import Grid from '../components/Grid.vue'
import Divider from '../components/Divider.vue'
import SpotifyPresence from '../components/SpotifyPresence.vue'

export default {
    components: {
        NameHeader,
        Bio,
        Grid,
        Divider,
        SpotifyPresence
    }
}

</script>