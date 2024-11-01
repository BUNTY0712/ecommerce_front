import { View, Text, StyleSheet, Image } from 'react-native'
import samsung from "../../Page/assets/samsung.jpeg" 
import neklace from "../../Page/assets/neklace.jpeg" 
import watch from "../../Page/assets/watch.jpeg" 
import heel from "../../Page/assets/heel.png" 
import speaker from "../../Page/assets/speaker.png" 




import React from 'react'

const Brands = () => {
  return (
      <View style={styles.container}>
          <View style={styles.innerContainer}>
              <Text style={styles.title}>Brands of the day </Text>
              {/* 1st row  */}
              <View style={styles.row}>
                  <View style={styles.brands}>
                        
              <Image source={neklace} style={styles.imgStyle} />
              <Text style={styles.brandTitle}>Min. 20% off | CaratLand Diamond Neklace</Text>
                  </View>

                  {/* second  */}
                  <View style={styles.brands}>
              <Image source={watch} style={styles.imgStyle} />
              <Text style={styles.brandTitle}>Min. 40% off | Fossil, Titan Smart Watch & More</Text>
                  </View>

              </View>


              {/* 2nd row  */}
                 <View style={styles.row}>
                  
                  <View style={styles.brands}>
              <Image source={heel} style={styles.imgStyle} />
              <Text style={styles.brandTitle}>Heels - Upto 50% OFF on Heeled Sandals, High Heel </Text>
                  </View>

                  {/* second  */}
                  <View style={styles.brands}>
              <Image source={speaker} style={styles.imgStyle} />
              <Text style={styles.brandTitle}>Sony 60W Bluetooth SoundBar Speaker Audio Engine </Text>
                  </View>
              </View>

          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
         borderTopWidth: 1,
        borderTopColor: "#dddddd",
    },
    imgStyle: {
        height: 150,
        width: '100%',
        borderRadius: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        padding: 10
    },
    row: {
       flexDirection: 'row'
    },
    brands: {
        width: '50%',
        padding: 10,
    },
    brandTitle: {
        fontSize: 12,
        color: 'black',
        marginTop: 4,
    }
})

export default Brands