// Import necessary modules and components
import { useState, useEffect } from "react";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import SearchQueryCard from "../molecules/SearchQueryCard";
import { StyleSheet, View } from "react-native";
import SearchFilterRadioCard from "../organisms/SearchFilterRadioCard";
import DynamicBackground from "../templates/DynamicBackground";

import SelectInput from "../molecules/SelectInput";
import NumSlider from "../molecules/NumSlider";

// SearchResultsFilterScreen component
export default function SearchResultsFilterScreen({ route, navigation }) {
  // Extract filters and searchQuery from route params
  const { filters, searchQuery } = route.params;

  // Set up navigation listener on blur event
  useEffect(() => {
    navigation.addListener("blur", () => {
      // Navigate back to "Search Results" screen with updated filters
      navigation.navigate("Search Results", { filters1: filters });
    });
  }, []);

  // State variables to manage filter values
  const [filterValue, setFilterValue] = useState(filters.sortType);
  const [companyValue, setCompanyValue] = useState(filters.company);
  const [spaceshipTypeValue, setSpaceshipTypeValue] = useState(
    filters.spaceshipType
  );
  const [maxPriceValue, setMaxPriceValue] = useState(filters.maxPrice);

  // Options for company and spaceship type
  const [companyItems, setCompanyItems] = useState([
    { label: "Any", value: "any" },
    { label: "Space X", value: "space-x" },
    { label: "Blue Origin", value: "blue-origin" },
    { label: "Virigin Galactic", value: "virgin-galactic" },
  ]);

  const [spaceshipTypeItems, setSpaceshipTypeItems] = useState([
    { label: "Any", value: "any" },
    { label: "Rocket", value: "rocket" },
    { label: "Spaceplane", value: "spaceplane" },
    { label: "Capsule", value: "capsule" },
  ]);

  // Update filters with the selected values
  useEffect(() => {
    filters.sortType = filterValue;
    filters.company = companyValue;
    filters.spaceshipType = spaceshipTypeValue;
    filters.maxPrice = maxPriceValue;
  }, [filterValue, companyValue, spaceshipTypeValue, maxPriceValue]);

  // Render the SearchResultsFilterScreen UI
  return (
    <DynamicBackground>
      <CenterViewContainer>
        <View style={styles.container}>
          <SearchQueryCard query={searchQuery} />
        </View>
        <SearchFilterRadioCard value={filterValue} setValue={setFilterValue} />
        <SelectInput
          label={"Company"}
          value={companyValue}
          setValue={setCompanyValue}
          items={companyItems}
        />
        <SelectInput
          label={"Spaceship Type"}
          value={spaceshipTypeValue}
          setValue={setSpaceshipTypeValue}
          items={spaceshipTypeItems}
        />
        <NumSlider
          label={"Max Price"}
          minValue={0}
          maxValue={1000000}
          value={maxPriceValue}
          setValue={setMaxPriceValue}
          valueLabel={"$0 - $" + maxPriceValue}
          step={50000}
        />
      </CenterViewContainer>
    </DynamicBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
