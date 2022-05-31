import React, {useState} from 'react'
import { SafeAreaView, StyleSheet,Platform, Text,Linking, View ,Dimensions, TouchableOpacity, } from 'react-native'
import Pdf from 'react-native-pdf';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';


const Home = () => {
const [page, setPage] = useState(1)
const [num,setNum] = useState(0)
const [list, setList] = useState(false)


console.log("pages",  Platform.OS)
  return (
    <>
          <View style={{
            backgroundColor:'green',  
            width:widthPercentageToDP(100), 
            height : Platform.OS == 'ios' ?  heightPercentageToDP(13)  :  heightPercentageToDP(8),
            alignSelf:'center',
            alignItems:'center',
            paddingLeft: widthPercentageToDP(12),
            paddingRight: widthPercentageToDP(8)
          }}>
            <SafeAreaView  style={{
            backgroundColor:'green',  
            width:widthPercentageToDP(100), 
            flexDirection : 'row',
            justifyContent : 'space-between', 
            alignSelf:'center',
            alignItems:'center',
            paddingHorizontal: 18
          }}>
          
              <TouchableOpacity onPress={()=>  
              Linking.openURL('vnd.youtube://channel/UC-AG51afpJqArDqS_8QzbEA').then(supported => {
                if (supported) {
                  return Linking.openURL('vnd.youtube://channel/UC-AG51afpJqArDqS_8QzbEA');
              } else {
                  return Linking.openURL('https://www.youtube.com/channel/UC-AG51afpJqArDqS_8QzbEA');
              }
              }).catch((err)=>{
                console.log("errr", err),
                Linking.openURL('https://www.youtube.com/channel/UC-AG51afpJqArDqS_8QzbEA');
              })
            
            
            } style={{  alignSelf:'flex-end'}}>  
                  <FastImage
                  
                    style={{
                      width: widthPercentageToDP(10),
                      height: heightPercentageToDP(8),
                      marginRight: widthPercentageToDP(0)
                    }}
                    source={ require('@images/youtube.png')}
                    resizeMode={FastImage.resizeMode.contain}
                  />    
              </TouchableOpacity>

                <Text style={{
                  color:'#fff',
                  fontWeight:'bold',
                  fontSize: 18, 
                  alignSelf:'center'
                }}>
                  {`Halaman ${num}`}
                </Text>
                <TouchableOpacity style={{  alignSelf:'flex-end'}} onPress={()=> setList(!list)}>  
                  <FastImage
                    tintColor={"#FFFFFF"}
                    style={{
                      width: widthPercentageToDP(8),
                      height: heightPercentageToDP(8),
                      marginRight: widthPercentageToDP(3),
                    }}
                    source={ list ? require('@images/Close.png') : require('@images/List.png')}
                    resizeMode={FastImage.resizeMode.contain}
                  />    
              </TouchableOpacity>
            </SafeAreaView>
          </View>
          <View >
          </View>
            <View style={styles.container}>
              <Pdf
                horizontal={list}
                enablePaging={list}
                page={page}
                trustAllCerts={false}
                source={ Platform.OS == 'ios' ? require('../../Assets/kitab.pdf') : {uri:"bundle-assets://path/to/kitab.pdf"} }
                onPageChanged={(page,numberOfPages) => {
                    console.log(`Current page: ${page}`);
                    if(page > 3){
                      setNum(page - 3)
                    }
                }}
                onError={(error) => {
                    console.log(error);
                }}
                style={styles.pdf}
                  />
              
            </View>

            {/* play mp3 button */}
            <View 
            opacity={0.7}
            style={{
              backgroundColor: 'white',
              height: heightPercentageToDP(9),
             

            }}>
                <Text>Play</Text>
            </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
}
})