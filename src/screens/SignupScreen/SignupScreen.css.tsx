import {StyleSheet} from 'react-native';

type Style = {
  container: any;
  logo: any;
  text: any;
  forgotButton: any;
  navButtonText: any;
};

export default StyleSheet.create<Style>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {height: 150, width: 150, resizeMode: 'cover'},
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  forgotButton: {marginVertical: 35},
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
