import { BluetoothState } from 'react-native-bluetooth-state-manager';

BluetoothStateManager.getState().then((bluetoothState) => {
    switch (bluetoothState) {
      case 'Unknown':
      case 'Resetting':
      case 'Unsupported':
      case 'Unauthorized':
      case 'PoweredOff':
      case 'PoweredOn':
      default:
        break;
    }
  });


  