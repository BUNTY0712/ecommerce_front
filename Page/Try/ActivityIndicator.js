import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import surf from "../../Page/assets/surf.png";
import { Categories } from "../data/Categories";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getcategoryproducts } from "../utils/helper";
import { useDispatch } from "react-redux";

const ActivityIndicator = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (title) => {
    setLoading(true);
    try {
      console.log("Fetching products...");
      await getcategoryproducts(dispatch, navigation, title);
    } catch (error) {
      console.error("Error in fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {Categories.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.category}
              onPress={() => handleSubmit(item.tittle)}
            >
              <Image source={item.image} style={styles.imgStyle} />
              <Text style={styles.title}>{item.tittle}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFFFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 10,
    color: "#2c4341",
  },
  category: {
    paddingHorizontal: 8,
    alignItems: "center",
  },
  loader: {
    marginTop: 20,
  },
});

export default ActivityIndicator;

export const getcategoryproducts = async (dispatch, navigation, title) => {
  try {
    const response = await axios.post(getcategoryproducturl, { title });
    const categoryproduct = response.data;
    dispatch(setCategoryProduct(categoryproduct.data));
    navigation.navigate("ProductScreens");
    return categoryproduct.data;
  } catch (error) {
    dispatch(setCategoryProduct([]));
    navigation.navigate("ProductScreens");
  }
};
