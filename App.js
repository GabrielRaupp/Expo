import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';





const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [selectedSection, setSelectedSection] = useState('main');
  const switchButtonPosition = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(switchButtonPosition, {
      toValue: isLightMode ? 1 : 0,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [isLightMode]);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  const switchButtonPositionInterpolation = switchButtonPosition.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '50%'],
  });

  return (
    <SafeAreaView style={[styles.container, isLightMode && styles.lightContainer]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {selectedSection === 'main' ? (
          <View>
            <View style={styles.portifolio}>
              <Image
                source={isLightMode ? require('./assets/avatar2.jpeg') : require('./assets/avatar.jpeg')}
                style={styles.avatar}
              />
              <Text style={[styles.username, isLightMode && styles.lightText]}>Gabriel Raupp</Text>
            </View>

            <View style={styles.switchContainer}>
              <TouchableOpacity style={styles.switch} onPress={toggleMode}>
                <View style={[styles.switchBackground, isLightMode && styles.lightSwitchBackground]} />
                <Animated.View
                  style={[
                    styles.switchButton,
                    {
                      left: switchButtonPositionInterpolation,
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.linksContainer}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/gabriel.raupp17/')} style={[styles.link, isLightMode && styles.lightLink]}>
                <Text style={[styles.linkText, isLightMode && styles.lightText]}>Me Siga no Instagram</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=554899795671')} style={[styles.link, isLightMode && styles.lightLink]}>
                <Text style={[styles.linkText, isLightMode && styles.lightText]}>Fale Comigo</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/GabrielRaupp')} style={[styles.link, isLightMode && styles.lightLink]}>
                <Text style={[styles.linkText, isLightMode && styles.lightText]}>Ver meu portfólio</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/gabriel-rp-undefined-5800b6262/')} style={[styles.link, isLightMode && styles.lightLink]}>
                <Text style={[styles.linkText, isLightMode && styles.lightText]}>Ver meu Linkedin</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelectedSection('about')} style={[styles.link, isLightMode && styles.lightLink]}>
                <Text style={[styles.linkText, isLightMode && styles.lightText]}>Sobre Gabriel Raupp Pimentel</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.socialLinks}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/GabrielRaupp')} style={[styles.socialLink, isLightMode && styles.lightSocialLink]}>
                <Text style={[styles.socialLinkText, isLightMode && styles.lightText]}>GitHub</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/gabriel.raupp17/')} style={[styles.socialLink, isLightMode && styles.lightSocialLink]}>
                <Text style={[styles.socialLinkText, isLightMode && styles.lightText]}>Instagram</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/gabriel-rp-undefined-5800b6262/')} style={[styles.socialLink, isLightMode && styles.lightSocialLink]}>
                <Text style={[styles.socialLinkText, isLightMode && styles.lightText]}>LinkedIn</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <Text style={[styles.footerText, isLightMode && styles.lightText]}> Gabriel Raupp Pimentel</Text>
            </View>
          </View>
        ) : (
          <View style={styles.aboutContainer}>
            <View style={styles.portifolio}>
              <Image
                source={isLightMode ? require('./assets/avatar2.jpeg') : require('./assets/avatar.jpeg')}
                style={styles.avatar}
              />
              <Text style={[styles.username, isLightMode && styles.lightText]}>Gabriel Raupp</Text>
            </View>
            <Text style={[styles.aboutText, isLightMode && styles.lightText]}>
               Meu nome é Gabriel Raupp Pimentel, sou um desenvolvedor apaixonado por tecnologia e programação. Tenho experiência em desenvolvimento web mobile, IA e software, e adoro aprender novas tecnologias. Se quiser saber mais, clique no botão de voltar e entre em contato comigo pelas redes sociais!{"\n\n"}
  Aqui em baixo estão algumas linguagens que eu domino
</Text>


            <View style={styles.iconsContainer}>
              <Ionicons name="logo-react" size={40} color={isLightMode ? "black" : "white"} style={styles.icon} />
              <Ionicons name="logo-css3" size={40} color={isLightMode ? "black" : "white"} style={styles.icon} />
              <Material name="language-typescript" size={40} color={isLightMode ? "black" : "white"} style={styles.icon} />
              <Ionicons name="logo-nodejs" size={40} color={isLightMode ? "black" : "white"} style={styles.icon} />
              <Ionicons name="logo-javascript" size={40} color={isLightMode ? "black" : "white"} style={styles.icon} />
              <Ionicons name="logo-python" size={40} color={isLightMode ? "black" : "white"} style={styles.icon} />
              <FontAwesome5  name="java" size={40} color={isLightMode ? "black" : "white"} style={styles.icon} />
              <Ionicons name="logo-android" size={40} color={isLightMode ? "black" : "white"} style={styles.icon} />
            </View>

            <TouchableOpacity onPress={() => setSelectedSection('main')} style={[styles.link, isLightMode && styles.lightLink]}>
              <Text style={[styles.linkText, isLightMode && styles.lightText]}>Voltar</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  lightContainer: {
    backgroundColor: 'white',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 24,
  },
  portifolio: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
  },
  username: {
    fontWeight: '500',
    color: 'white',
    marginTop: 8,
  },
  lightText: {
    color: 'black',
  },
  switchContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  switch: {
    width: 64,
    height: 32,
    justifyContent: 'center',
  },
  switchButton: {
    position: 'absolute',
    width: 32,
    height: 32,
    backgroundColor: 'white',
    borderRadius: 16,
    zIndex: 1,
  },
  switchBackground: {
    width: 64,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
  },
  lightSwitchBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  linksContainer: {
    width: '80%',
    maxWidth: 400, 
    marginBottom: 24,
    borderRadius: 20,
    alignSelf: 'center',
  },
  link: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#9999',
    borderRadius: 8,
    alignItems: 'center',
  },
  lightLink: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  linkText: {
    color: 'white',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  socialLink: {
    padding: 16,
    marginHorizontal: 8,
    backgroundColor: '#9999',
    borderRadius: 50,
  },


  lightSocialLink: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  socialLinkText: {
    color: 'white',
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.6)',
  },
  aboutContainer: {
    alignItems: 'center',
    padding: 24,
  },
  aboutText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
    backgroundColor: '#9999',
    borderRadius: 10,
    padding: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 16,
  },
  icon: {
    margin: 8,
  },
});

export default App;
