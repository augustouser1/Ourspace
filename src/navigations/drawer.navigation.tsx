import {createDrawerNavigator, DrawerNavigationProp} from '@react-navigation/drawer'
import {Ionicons} from "@expo/vector-icons";
import { TabNavigation } from './tab.navigation';

type DrawerParamList = {
    Tab: undefined
}

type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation : DrawerScreenNavigationProp
}

export function DrawerNavigation(){
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return(
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: "black"},
            headerTintColor: "white",
            drawerStyle:{
                backgroundColor: "black",
            },
            drawerActiveTintColor: "white",
            drawerInactiveTintColor: "white"
        }}>
            <Drawer.Screen name='Tab' component={TabNavigation}
                options={{
                    drawerLabel: 'Perfil',
                    headerTitle: "Perfil",
                    drawerIcon:()=>(
                        <Ionicons name="person" size={24} color="white"/>
                    ),  
                }}

            />

        </Drawer.Navigator>
    )
}