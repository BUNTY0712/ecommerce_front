import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import amazon_pay from "../../Page/assets/amazon_pay.jpeg" 
import send_money from "../../Page/assets/send_money.jpeg" 
import pay_bill from "../../Page/assets/pay_bill.png" 
import scan from "../../Page/assets/scan.jpeg" 
import shopping from "../../Page/assets/shopping.jpeg" 
import { RecentSearchData } from '../data/RecentSearchData'
const Services = () => {
  return (
      <>
       <Text style={styles.tittle}>Services</Text>
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
              style={styles.container}
              contentContainerStyle={{paddingRight: 20}}
          >
              {RecentSearchData.map((item, i) => (
                  
              <View key={i} style={styles.outerContainer}>
                      <Text style={styles.recentSearch}>{ item.title}</Text>
                  <Image source={item.image} style={styles.serviceImg} />
              </View>
              ))}
              <View style={styles.serviceContainer}>
                  <View style={styles.row}>
                      <View style={styles.innerContainer}>
                          
 <Image style={styles.imgStyle} source={amazon_pay} />
                  <Text style={styles.title}>Amazon Pay </Text>
                      </View>
                      <View style={styles.innerContainer}> 
                          
 <Image style={styles.imgStyle} source={send_money} />
                  <Text style={styles.title}>Amazon Pay </Text>
                      </View>
                  </View>

                  <View style={styles.row}>
                      <View style={styles.innerContainer}>
                          
 <Image style={styles.imgStyle} source={scan} />
                  <Text style={styles.title}>Scan QR </Text>
                      </View>
                      <View style={styles.innerContainer}>
                          
 <Image style={styles.imgStyle} source={pay_bill} />
                  <Text style={styles.title}>Pay Bills </Text>
                      </View>
                  </View>
                 
              </View> 

              
          </ScrollView>
      </>
  )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 10,
        paddingHorizontal: 0,
        
    },
    tittle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        padding: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    serviceContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        elevation: 5,
        marginLeft: 8,
        
    },
    imgStyle: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    innerContainer: {
        padding: 10,
        alignItems: "center",
        paddingTop: 15,
        
    },
    title: {
        fontSize: 10,
        color: "black"
    },
    serviceImg: {
        width: "100%",
        height: 130
    },
    outerContainer: {
        backgroundColor: "white",
        marginLeft: 8,
        

        borderRadius: 5,
        elevation: 5,
        padding: 5,
        width: 140,
        marginBottom: 8
    },
    recentSearch: {
        fontSize: 13,
        color: 'black',
        marginBottom: 8,
    }

})

export default Services