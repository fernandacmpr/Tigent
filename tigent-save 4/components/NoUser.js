import *as React from 'react'
import { useState } from 'react'
import {StyleSheet, View, Image, ImageBackground,Text,TextInput,TouchableOpacity,ScrollView,Dimensions} from 'react-native'
import ScreenWrapper from './ScreenWrapper'
import {
  Paragraph,
  Card,
  useTheme,
  Checkbox,
  TouchableRipple,
  Button
} from 'react-native-paper';
import {
  Mulish_500Medium,
} from '@expo-google-fonts/mulish';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const HomePage=()=>{

  const { isV3 } = useTheme();
  const TextComponent = isV3 ? Text : Paragraph;
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
    let [fontsLoaded, error] = useFonts({
    Mulish_500Medium,  
  })
const navigation = useNavigation();
const signup = () => {navigation.navigate("SignUp")}
const dashboard = () => {navigation.navigate('NoUserDashboard')}
const pomodoro = () => {navigation.navigate('NoUserPomodoro');};
  const width = Dimensions.get('screen').width
  const height = Dimensions.get('screen').height
  return (
    <SafeAreaProvider>
    <ScreenWrapper>
      <View style={{flex:1,height,width}}>
      <ScrollView> 
        <Text style={styles.title}>
          Hello!
        </Text>
       
      
      <Card style={styles.card4}>
        <Text style={styles.text3}>
          Pomodoro
        </Text>
        <TouchableOpacity onPress = {pomodoro}>
        <Ionicons name = "timer" color = "white" size = {62} style={styles.icon}/>  
        </TouchableOpacity>
      </Card>

      <TouchableOpacity onPress={signup}>
        <Text style={{fontFamily:"Mulish_500Medium",fontSize:20,alignSelf:"center",padding:10,marginTop:50,color:"#FF3E89"}}>
          Sign up to access the To-do list, goals, and annotations features. 
        </Text>
      </TouchableOpacity>
    
</ScrollView>
          <Card
            style={{
              position: 'absolute',
              bottom: 0,
              width,
              alignItems: 'center',
              height:70,
              backgroundColor:"white"
            }}>
            <TouchableOpacity >
              <Ionicons
                name="home"
                size={34}
                color="#9584FF"
                style={{marginTop:10,marginLeft:-10}}
              />
            </TouchableOpacity>
          
          <TouchableOpacity onPress={dashboard}>
            <MaterialIcons
              name="dashboard"
              size={34}
              color="#9584FF"
              style={{marginTop:-34,marginLeft:155}}
            />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontFamily:"Mulish_500Medium",color:"#9584FF",marginLeft:-10}}>
                Home
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={dashboard}>
            <Text
              style={{fontFamily:"Mulish_500Medium",marginTop:-17,marginLeft:135,color:"#9584FF"}}>
              Dashboard
            </Text>
            </TouchableOpacity>
          </Card>

      </View>
      </ScreenWrapper>
    </SafeAreaProvider>
  )
}

export default HomePage

const styles = StyleSheet.create({
  title:{
    alignSelf:'center',
    marginTop:"20%",
    fontSize:40,
    color:"black",
    fontFamily:"Mulish_500Medium",
  },
  card4:{
    alignSelf:"center",
    width:150,
    borderRadius:20,
    alignItems:"center",
    height:120,
    backgroundColor:"#9584FF",
    shadowColor: '#171717',
    shadowOffset: {width: -3, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
    marginTop:50
  },
  text3:{
    marginTop:5,
    color:"white",
    fontFamily:"Mulish_500Medium",
    fontSize:18
  },
  icon:{
    flex:1,
    alignSelf:"center",
    marginTop:9
  },

})

