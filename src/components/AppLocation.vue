<template>
  <ion-button v-if="needsPermission" @click="requestPermissions">Request Permission</ion-button>
  <div v-else>
    <div>Latitude: {{ latitude }}</div>
    <div>Longitude: {{ longitude }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton } from '@ionic/vue';
import useLocation from '@/use/location';

export default defineComponent({
  name: 'AppLocation',
  components: {
    IonButton,
  },
  setup() {
    const { latitude, longitude, needsPermission, requestPermissions } = useLocation();

    return {
      latitude,
      longitude,
      needsPermission,
      requestPermissions,
    };
  },
});
</script>
