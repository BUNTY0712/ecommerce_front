import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import CarouselSlider from 'react-native-reanimated-carousel'; // No Expo-specific import
import { CarouselData } from '../data/CarouselData';

const sliderWidth = Dimensions.get('screen').width;

const Carousel = () => {
    const carouselRef = useRef();

    const handleSlidePress = (item) => {
        console.log('Slide clicked:', item);
    };

    const goToNextSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.next(); // Go to the next slide
        }
    };

    const goToPrevSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.prev(); // Go to the previous slide
        }
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleSlidePress(item)}>
                <View style={styles.slide}>
                    <Image source={item.image} style={styles.imgStyle} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            {/* <Text style={styles.title}>Carousel</Text> */}
            <CarouselSlider
                ref={carouselRef}
                data={CarouselData}
                renderItem={renderItem}
                width={sliderWidth}
                height={200} // Adjust the height as needed
                mode="parallax" // Optional: Add carousel mode if you want a specific effect
                autoPlay={true} // Enable auto-slide
                autoPlayInterval={3000} // Slide every 3 seconds
                scrollAnimationDuration={1000} // Animation duration for the slide transition
            />
            {/* Left and Right Buttons */}
            {/* <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={goToPrevSlide} style={styles.button}>
                    <Text style={styles.buttonText}>{"<"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToNextSlide} style={styles.button}>
                    <Text style={styles.buttonText}>{">"}</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        backgroundColor: '#fff',
        borderRadius: 8,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    imgStyle: {
        height: '100%',
        width: '100%',
        borderRadius: 8,
    },
    buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 2,
    position: 'absolute',  
    
},
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: -30,
           
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default Carousel;
