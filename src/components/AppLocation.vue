<template>
  <div v-if="needsPermission" @click="requestPermissions">Allow location tracking to see location</div>
  <div v-else>
    <div>Latitude: {{ latitude }}</div>
    <div>Longitude: {{ longitude }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useLocation from '@/use/location';

export default defineComponent({
  name: 'AppLocation',
  setup() {
    const { latitude, longitude, needsPermission } = useLocation();

    return {
      latitude,
      longitude,
      needsPermission,
    };
  },
});
</script>
