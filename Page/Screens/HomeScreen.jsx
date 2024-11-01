import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Header from '../ReusableComponent/Header'
import SubHeader from '../ReusableComponent/SubHeader'
import Category from '../SmallComponent/Category'
import Carousel from '../SmallComponent/Carousel'
import Services from '../SmallComponent/Services'
// import { ScrollView } from 'react-native-web'
import Deals from '../SmallComponent/Deals'
import Brands from '../SmallComponent/Brands'
import Footer from '../SmallComponent/Footer'

const HomeScreen = () => {
  return (
    <View>
       <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <SubHeader />
      <Category/>
      <Carousel />
      <Services />
      <Deals />
      <Brands />
    </ScrollView>
      <Footer/>
    </View>
  )
}

export default HomeScreen