import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView, Dimensions
} from 'react-native';

import { AppLoading } from 'expo';
import {
  useFonts,
  WorkSans_600SemiBold,
} from '@expo-google-fonts/work-sans';

const ingredientData = [{ id: '1', title: 'Improves collagen levels' }, { id: '2', title: 'Antimicrobial' }, { id: '3', title: 'Antioxidant properties' }];

const quickFactsData = [{ id: '1', title: 'Natural moisturizer also in our skin' }, { id: '2', title: 'A super common, safe, effective and cheap molecule used for more than 50 years' }, { id: '3', title: 'Not only a simple moisturizer but knows much more: keeps the skin lipids between our skin cells in a healthy (liquid crystal) state, protects against irritation, helps to restore barrier' }];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatListItemSeparator = () => (
  <View
    style={{
      height: 2,
      width: '100%',
      backgroundColor: '#C4C4C4',
    }}
  />
);

const { width, height } = Dimensions.get('window');

export default function SkinConcerns({ navigation, route }) {
  const [fontsLoaded] = useFonts({ WorkSans_600SemiBold, });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const ingredientRenderItem = ({ item }) => (
    <View>
      <FlatListItemSeparator />
      <Item title={item.title} />
    </View>
  );
  const quickFactsRenderItem = ({ item }) => (
    <View>
      <Item title={`• ${item.title}`} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <View > */}
      <ScrollView
        alwaysBounceVertical
      >
        <Image
          style={styles.ingredientImg}
          source={require('../../assets/images/grape-extract.png')}
        />
        <View style={styles.dataContainer}>
          <View style={styles.dataSection}>
            <Text style={styles.productName}>Vitis Vinfera Seed Extract</Text>
            <Text style={styles.commonName}>AKA Grape Seed Extract</Text>
          </View>
          <View style={styles.dataSection}>
            <FlatList
              style={styles.ingredientDataFL}
              data={ingredientData}
              renderItem={ingredientRenderItem}
              keyExtractor={(item) => item.id}
            />
            <FlatListItemSeparator
              style={styles.ingredientDataFL}
            />
          </View>

          <View style={styles.dataSection}>
          <Text style={styles.headerTwo}>Quickfacts</Text>
          <FlatList
            style={styles.quickFactsDataFL}
            data={quickFactsData}
            renderItem={quickFactsRenderItem}
            keyExtractor={(item) => item.id}
          />
          </View>

          <View style={styles.dataSection}>
            <Text style={styles.headerTwo}>Products</Text>
            <View style={styles.productsContainer}>
              <View style={styles.productImgContainer}>
                <Image
                  style={styles.productImg}
                  source={require('../../assets/images/paulas.png')}
                />
              </View>
              <View style={styles.productImgContainer}>
                <Image
                  style={styles.productImg}
                  source={require('../../assets/images/product-2.jpg')}
                />
              </View>
              <View style={styles.productImgContainer}>
                <Image
                  style={styles.productImg}
                  source={require('../../assets/images/product-3.png')}
                />
              </View>
            </View>
          </View>

          <View style={styles.dataSection}>
            <Text style={styles.headerTwo}>References</Text>
            <Text style={styles.referenceText}>• Reference 1</Text>
            <Text style={styles.referenceText}>• Reference 2</Text>
            <Text style={styles.referenceText}>• Reference 3</Text>
          </View>
        </View>
      </ScrollView>

      {/* </View> */}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: '#FAF3EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingredientImg: {
    height: height / 3,
    width
  },
  item: {
    marginTop: 10,
    marginBottom: 10
  },
  dataContainer: {
    margin: width / 16
  },
  dataSection: {
    marginTop: 10
  },
  productName: {
    fontFamily: 'WorkSans_600SemiBold',
    fontSize: 30
  },
  commonName: {
    fontSize: 12
  },
  ingredientDataFL: {},
  headerTwo: {
    fontFamily: 'WorkSans_600SemiBold',
    fontSize: 24
  },
  quickFactsDataFL: {},
  productsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  productImgContainer: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5
  },
  productImg: {
    flex: 1,
    resizeMode: 'contain',
    height: height / 8,
    width: width / 4,

  },
  referenceText: {
    fontFamily: 'WorkSans_600SemiBold',
  }

});
