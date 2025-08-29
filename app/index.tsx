import "../global.css"
import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is a test</Text>
      <Pressable
        onPress={() => setCount(count + 1)} 
        className="border-blue-600 border-2 p-2 rounded-full shadow-md hover:translate-y-1 transition-all active:translate-y-2 select-none">
          <Text>Count: {count}</Text>
      </Pressable>
    </View>
  );
}
