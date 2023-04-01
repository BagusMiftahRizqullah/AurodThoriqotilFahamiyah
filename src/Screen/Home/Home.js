import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  Linking,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import Pdf from 'react-native-pdf';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

const Home = props => {
  const [page, setPage] = useState(1);
  const [num, setNum] = useState(0);
  const [list, setList] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleOption, setModalVisibleOption] = useState(false);

  const AllTrack = [
    {
      url: require('../../Assets/RotibulMuhammad.mp3'),
      title: 'Ratibul Muhammad.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('@images/Putih.png'),
      no: 3,
    },
    {
      url: require('../../Assets/RotibulMuhammad.mp3'),
      title: 'Ratibul Muhammad.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('@images/HisbulNafsh.png'),
      no: 9,
    },
    {
      url: require('../../Assets/RotibulMuhammad.mp3'),
      title: 'Ratibul Muhammad.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('@images/ratibulMuhammad.png'),
      no: 13,
    },
    {
      url: require('../../Assets/MaulidulMuhammad.mp3'),
      title: 'Maulidul Muhammad.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('@images/Hijau.png'),
      no: 32,
    },
    {
      url: require('../../Assets/MaulidulMuhammad.mp3'),
      title: 'Maulidul Muhammad.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('@images/maulidulMuhammad.png'),
      no: 39,
    },
    {
      url: require('../../Assets/manaqib.mp3'),
      title: 'Manaqib.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('@images/manaqib.png'),
      no: 58,
    },
    {
      url: require('../../Assets/DoaFathimah.mp3'),
      title: 'Doa Fathimah.mp3',
      artist: 'Thoriqotil Fahamiyah',
      artwork: require('@images/DoaFathimah.png'),
      no: 100,
    },
  ];

  return (
    <>
      <View
        style={{
          backgroundColor: 'green',
          width: widthPercentageToDP(100),
          height:
            Platform.OS == 'ios'
              ? heightPercentageToDP(13)
              : heightPercentageToDP(8),
          alignSelf: 'center',
          alignItems: 'center',
          paddingLeft: widthPercentageToDP(12),
          paddingRight: widthPercentageToDP(8),
        }}>
        <SafeAreaView
          style={{
            backgroundColor: 'green',
            width: widthPercentageToDP(100),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            alignItems: 'center',
            paddingHorizontal: 18,
          }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
            style={{alignSelf: 'flex-end'}}>
            <FastImage
              style={{
                width: widthPercentageToDP(10),
                height: heightPercentageToDP(8),
                marginRight: widthPercentageToDP(0),
              }}
              source={require('@images/youtube.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisibleOption(true);
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                alignSelf: 'center',
              }}>
              Pilih Halaman
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => setList(!list)}>
            <FastImage
              tintColor={'#FFFFFF'}
              style={{
                width: widthPercentageToDP(8),
                height: heightPercentageToDP(8),
                marginRight: widthPercentageToDP(3),
              }}
              source={
                list
                  ? require('@images/Close.png')
                  : require('@images/List.png')
              }
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View></View>
      <View style={styles.container}>
        <Pdf
          horizontal={list}
          enablePaging={list}
          page={page}
          trustAllCerts={false}
          source={
            Platform.OS == 'ios'
              ? require('../../Assets/kitab.pdf')
              : {uri: 'bundle-assets://path/to/kitab.pdf'}
          }
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
            if (page > 3) {
              setNum(page - 3);
            }
          }}
          onError={error => {
            console.log(error);
          }}
          style={styles.pdf}
        />
      </View>

      {/* modal media */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                props.navigation.navigate('Sound');
              }}
              style={{
                borderWidth: 2,
                borderRadius: 20,
                width: widthPercentageToDP(39),
                height: heightPercentageToDP(5),
                backgroundColor: '#9CCCBE',
                marginBottom: 12,
              }}>
              <Text style={styles.modalText}>Sound</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderRadius: 20,
                width: widthPercentageToDP(39),
                height: heightPercentageToDP(5),
                backgroundColor: '#FFC8D5',
              }}
              onPress={() => {
                setModalVisible(false),
                  Linking.openURL(
                    'vnd.youtube://channel/UC3UJLpCAbZ6L6bJuhj5SAnQ',
                  )
                    .then(supported => {
                      if (supported) {
                        return Linking.openURL(
                          'vnd.youtube://channel/UC3UJLpCAbZ6L6bJuhj5SAnQ',
                        );
                      } else {
                        return Linking.openURL(
                          'https://www.youtube.com/channel/UC3UJLpCAbZ6L6bJuhj5SAnQ',
                        );
                      }
                    })
                    .catch(err => {
                      console.log('errr', err),
                        Linking.openURL(
                          'https://www.youtube.com/channel/UC3UJLpCAbZ6L6bJuhj5SAnQ',
                        );
                    });
              }}>
              <Text style={styles.modalText}>Youtube</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal Options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleOption}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibleOption(!modalVisibleOption);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView2}>
            <Text style={styles.modalText}>Pilih Untuk Menuju Halaman</Text>
            <ScrollView
              style={{
                marginTop: heightPercentageToDP(2),
                width: widthPercentageToDP(90),
              }}>
              {AllTrack?.map((v, i) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        setPage(v.no),
                          setModalVisibleOption(!modalVisibleOption);
                      }}
                      style={{
                        // backgroundColor:'red',
                        // flexDirection:'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <FastImage
                        style={{
                          width: widthPercentageToDP(42),
                          height: heightPercentageToDP(23),
                          marginTop: widthPercentageToDP(2),
                        }}
                        source={v?.artwork}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleOption(!modalVisibleOption)}>
              <Text style={styles.textStyle}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView2: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(90),
    margin: 3,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: heightPercentageToDP(3),
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    width: widthPercentageToDP(32),
    backgroundColor: '#DD5571',
  },
  textStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 21,
    alignSelf: 'center',
    color: '#000000',
  },
});
