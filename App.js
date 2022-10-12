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
        <Button
          text="C"
          theme="secondary"
          onPress={() => this.handleTap("clear")}
        />
        <Button
          text="+/-"
          theme="secondary"
          onPress={() => this.handleTap("clear")}
        />
        <Button
          text="%"
          theme="secondary"
          onPress={() => this.handleTap("clear")}
        />
        <Button
          text="/"
          theme="accent"
          onPress={() => this.handleTap("clear")}
        />
      </Row>

      <Row>
        <Button text="7" onPress={() => this.handleTap("number", 7)} />
        <Button text="8" onPress={() => this.handleTap("number", 8)} />
        <Button text="9" onPress={() => this.handleTap("number", 9)} />
        <Button
          text="x"
          theme="accent"
          onPress={() => this.handleTap("operator", "*")}
        />
      </Row>
      <Row>
        <Button text="4" onPress={() => this.handleTap("number", 4)} />
        <Button text="5" onPress={() => this.handleTap("number", 5)} />
        <Button text="6" onPress={() => this.handleTap("number", 6)} />
        <Button
          text="-"
          theme="accent"
          onPress={() => this.handleTap("operator", "-")}
        />
      </Row>
      <Row>
        <Button text="7" onPress={() => this.handleTap("number", 7)} />
        <Button text="8" onPress={() => this.handleTap("number", 8)} />
        <Button text="9" onPress={() => this.handleTap("number", 9)} />
        <Button
          text="+"
          theme="accent"
          onPress={() => this.handleTap("operator", "+")}
        />
      </Row>

      <Row>
        <Button
          text="0"
          size="double"
          onPress={() => this.handleTap("number", 0)}
        />
        <Button
          text="."
          size="double"
          onPress={() => this.handleTap("operator", ".")}
        />
        <Button
          text="="
          theme="accent"
          onPress={() => this.handleTap("equal")}
        />
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
