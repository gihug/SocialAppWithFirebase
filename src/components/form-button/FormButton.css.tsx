import {StyleSheet} from 'react-native';
import {windowHeight} from '../../utils/Dimention';

type Style = {
  buttonContainer: any;
  buttonText: any;
};

export default StyleSheet.create<Style>({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
