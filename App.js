import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Meteoroloji from "./src/screens/Meteoroloji";
import HastalikliBolgeler from "./src/screens/HastalikliBolgeler";
import SakaTT from "./src/screens/SakaTT";



const navigator = createStackNavigator(
  {
    
    Meteoroloji: Meteoroloji,
    HastalikliBolgeler: HastalikliBolgeler,
    SakaTT: SakaTT,

  },
  {
    initialRouteName: "Meteoroloji",
    defaultNavigationOptions: { 
      headerShown: false,
      }
  },
  
);

export default createAppContainer(navigator);
