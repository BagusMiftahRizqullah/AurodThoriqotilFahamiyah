import React , {useEffect} from 'react'
import { StyleSheet, Text, Dimensions, View, Image } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const LaunchScreen = ({navigation}) => {
    const checkWelcome = async () => {
        setTimeout(() => {
          navigation.replace('Home');
        }, 2000);
      };

      useEffect(() => {
        checkWelcome();
      }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('@images/Logo.png')}
        style={styles.logo}
        resizeMode="cover"
      />
      </View>
  )
}

export default LaunchScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {

        alignSelf: 'center',
        width: widthPercentageToDP(80),
        height:heightPercentageToDP(80),

      },
      text: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 11,
      },
})