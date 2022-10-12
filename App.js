import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Button from "./src/components/Button";
import Row from "./src/components/Row";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        {/* Value */}
        Value
      </Text>
      <Row>
        <Button text="C" onPress={() => this.handleTap("clear")} />
        <Button text="+/-" onPress={() => this.handleTap("clear")} />
        <Button text="%" onPress={() => this.handleTap("clear")} />
        <Button text="/" onPress={() => this.handleTap("clear")} />
      </Row>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
