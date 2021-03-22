import {StyleSheet} from 'react-native';
import {windowHeight} from '../../utils/Dimention';

type Style = {
  buttonContainer: any;
  buttonText: any;
  iconWrapper: any;
  icon: any;
  btnTxtWrapper: any;
};

export default StyleSheet.create<Style>({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
