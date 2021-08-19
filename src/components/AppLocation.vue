<template>
  <div>
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
    const { latitude, longitude } = useLocation();

    return {
      latitude,
      longitude,
    };
  },
});
</script>
