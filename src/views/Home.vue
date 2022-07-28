<template>
  <name-header></name-header>
  <bio></bio>
  <grid></grid>
  <divider></divider>
</template>

<script>

import NameHeader from '../components/NameHeader.vue'
import Bio from '../components/Bio.vue'
import Grid from '../components/Grid.vue'
import Divider from '../components/Divider.vue'

export default {
    components: {
        NameHeader,
        Bio,
        Grid,
        Divider,
    }
}

</script>