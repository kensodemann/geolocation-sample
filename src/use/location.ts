import { Geolocation, PermissionStatus, Position } from '@capacitor/geolocation';
import { ref } from 'vue';

export default () => {
  const needsPermission = ref(false);
  const latitude = ref(0);
  const longitude = ref(0);

  const checkPermissions = () => {
    Geolocation.checkPermissions().then((p: PermissionStatus) => {
      needsPermission.value = p.location === 'denied';
    });
  };

  Geolocation.watchPosition({}, (position: Position | null) => {
    if (position) {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;
    } else {
      checkPermissions();
    }
  });

  return {
    latitude,
    longitude,
    needsPermission,
  };
};
