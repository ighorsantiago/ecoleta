import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Detail } from "../screens/Detail";
import { Points } from "../screens/Points";

const Stack = createNativeStackNavigator();

export function Routes() {
      return (
            <NavigationContainer>
                  <Stack.Navigator
                        screenOptions={{ headerShown: false }}
                  >
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Detail" component={Detail} />
                        <Stack.Screen name="Points" component={Points} />
                  </Stack.Navigator>
            </NavigationContainer >
      );
}
