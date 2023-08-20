import React from "react";
import { View, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../atoms/cards/CarouselCardItem";
import data from "../../components/data/Data";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
      <Carousel
        // layout="tinder"
        // layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};

const styles = {
  container: {
    alignItems: "center",
    justifyContent: "top",
    marginTop: 10,
  },
};
export default CarouselCards;
