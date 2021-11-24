<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import Home from './admin'

export default {
  name: 'Dashboard',
  components: { Home },
  data() {
    return {
      currentRole: 'Home'
    }
  },
  computed: {
  },
  created() {
  }
}
</script>
