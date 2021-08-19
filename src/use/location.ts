import { Geolocation, Position } from '@capacitor/geolocation';
import { ref } from 'vue';

export default () => {
  const latitude = ref(0);
  const longitude = ref(0);

  Geolocation.watchPosition({}, (position: Position | null) => {
    if (position) {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;
    }
  });

  return {
    latitude,
    longitude,
  };
};
