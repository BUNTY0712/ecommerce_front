import { View, Text, StyleSheet, TextInput, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, AntDesign, Feather, Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getallproductsathome, gettitleproducts } from '../utils/helper'; // Ensure the correct path is used
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = () => {
  const { allproduct } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [filterdata, setFilterData] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [searchvalue, setSearchValue] = useState(""); // Initialize as an empty string
  const [filtervalue, setFilterValue] = useState(null);

  useEffect(() => {
    // Fetch all products when the component is mounted
    getallproductsathome(dispatch, navigation);
  }, [dispatch, navigation]);

  const handleClear = () => {
    setNoResults(false);
    setFilterData([]);
    setSearchValue(""); // Clear the search value
  };

  const handleSubmit = (text) => {
    setSearchValue(text); // Update the search value state
    if (text === "") {
      setFilterData([]);
      setNoResults(false);
      return;
    }

    if (allproduct && Array.isArray(allproduct)) {
      // Filter products based on title
      const filtered = allproduct.filter(product => 
        product.productTitle.toLowerCase().includes(text.toLowerCase())
      );
      setFilterValue(filtered);
      if (filtered.length > 0) {
        setFilterData(filtered);
        setNoResults(false);
      } else {
        setFilterData([]);
        setNoResults(true);
      }
    }
  };

  const handleSearch = async () => {
    await gettitleproducts(dispatch, navigation, filtervalue);
  };

  return (
    <View>
      <StatusBar backgroundColor='#9ee4d4' barStyle='dark-content' />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}
        style={styles.container}
      >
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name='search' size={22} color="#1f1f1f" />
          </View>
          <TextInput
            onChangeText={handleSubmit} // Correct prop for text input in React Native
            placeholder="Search Amazon.in"
            placeholderTextColor="#848484"
            style={styles.textInput}
            value={searchvalue} // Bind the value to searchvalue state
          />
          {searchvalue === "" ? (
       null
          ): (
      <TouchableOpacity onPress={handleClear}>
            <Entypo name='cross' size={22} color="#909594" />
          </TouchableOpacity>
          )}
        </View>
        <Feather name='mic' size={20} color="#000000" />
      </LinearGradient>
      
      {/* Filter Container */}
        {filterdata.length > 0 ? (
          filterdata.map((item, i) => (
            <View key={i} style={styles.filtercontainer}>
              <View key={i} style={styles.filterlist}>
                <TouchableOpacity onPress={handleSearch}>

              <Text>{item.productTitle}</Text>
                </TouchableOpacity>
              </View>
                </View>
          ))
      ) : noResults ? (
             <View style={styles.filtercontainer}>
          <View style={styles.filterlist}>
            <Text>Opps no item found</Text>
            </View>
              </View>
        ) : null}
      </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    zIndex: 2, // Ensure the gradient is above the underlying view
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a1bcc0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,
    zIndex: 3, // Bring the input box above the gradient
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    padding: 8,
    width: "82%",
  },
  filtercontainer: {
    padding: 10,
    position: "absolute", // Changed to absolute to overlay
    top: 60, // Adjust according to the height of your header
    left: 0,
    right: 0,
    backgroundColor: '#fff', // Add a background color for better visibility
    zIndex: 5, // Ensure the filter container is on top of everything
    elevation: 5,
    marginLeft: 12,
    marginTop: 10,
    marginRight: 45,
     borderRadius: 8,
  },
  filterlist: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
  }
});

export default Header;
