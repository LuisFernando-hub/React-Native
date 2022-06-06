import 'react-native-reanimated'
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Home from './src/pages/Home';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Criar uma conta no Finances ?',
    description: 'Sua conta aqui e agora !!!',
    image: require('./src/assets/1648571588-roxinho-basicos-flutuantes-md-3x.png')
  },
  {
    key: '2',
    title: 'Com o Finances você vai longe',
    description: 'Anuidade de Graça !!!',
    image: require('./src/assets/nubank.jpg')
  },
]

export default function App() {
  const [showHome, setShowValue] = useState(false);
  function renderSlides({ item }) {
    return (
      <View style={{ flex: 1, backgroundColor: '#8000ff' }}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%',
          }}
        />
        <Text style={{
          paddingTop: 25,
          paddingBottom: 10,
          fontSize: 23,
          fontWeight: 'bold',
          color: '#000',
          alignSelf: 'center',
        }}>
          {item.title}
        </Text>
        <Text style={{
          textAlign: 'center',
          color: '#b5b5b5',
          paddingHorizontal: 25,
          fontSize: 15,
          fontWeight: 'bold'
        }}>
          {item.description}
        </Text>
      </View>
    )
  }
  if (showHome) {
    return (<Home />)
  } else {
    return (<AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#8000ff',
        width: 30
      }}
      renderNextButton={() => { }}
      renderPrevButton={() => { }}
      onDone={() => setShowValue(!showHome)}
    />
    );
  }

}

