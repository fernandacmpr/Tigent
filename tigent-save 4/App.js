import './rwi';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/AssetExample';
import Login from './components/LoginScreen';
import HomePage from './components/HomePage';
import ToDo from './components/ToDoList';
import Idea1 from './components/Idea1';
const Stack = createNativeStackNavigator();
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp';
import Pomodoro from './components/Pomodoro';
import Break from './components/Break';
import Goals from './components/Goals';
import Annotations from './components/Annotations';
import Work from './components/Work'
import Project from './components/Project'
import NoUser from './components/NoUser'
import NoUserBreak from './components/NoUserBreak'
import NoUserPomodoro from './components/NoUserPomodoro'
import NoUserDashboard from './components/NoUserDashboard'
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const iosCredentials = {
  clientId: '1:840366945251:ios:fd8a3f74e453bc25b126d6',
  appId: '1:840366945251:ios:fd8a3f74e453bc25b126d6',
  apiKey: 'AIzaSyBqz0uDT8OXgnKFeD0XgpXjHpJGg4nbAjw',
  databaseURL: '',
  storageBucket: 'tigent-c4926.appspot.com',
  messagingSenderId: '840366945251',
  projectId: 'tigent-c4926',
};
const androidCredentials = {
  clientId: '1:840366945251:ios:fd8a3f74e453bc25b126d6',
  appId: '1:840366945251:ios:fd8a3f74e453bc25b126d6',
  apiKey: 'AIzaSyBqz0uDT8OXgnKFeD0XgpXjHpJGg4nbAjw',
  databaseURL: '',
  storageBucket: 'tigent-c4926.appspot.com',
  messagingSenderId: '840366945251',
  projectId: 'tigent-c4926',
};

const credentials = Platform.select({
  android: androidCredentials,
  ios: iosCredentials,
});


const config = {
  name: 'TIGENT_APP',
};
try {
  let app = firebase.app('TIGENT_APP');
  console.log('App named TIGENT_APP already exists', app);
} catch (error) {
  console.log('App named TIGENT_APP does not exist');
  let app = firebase.initializeApp(credentials, 'TIGENT_APP');
  console.log('App TIGENT_APP has been created', app);
}

export default function App() {
  const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  AsyncStorage.getItem('userLogged')
    .then(res => {
      console.log('Userloggedin: ', res);
      setData(res);
      setIsLoading(false);
    })
    .catch(err => {
      console.error(err);
      setIsLoading(false);
    });
}, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
          {data == null?(
            <>
            <Stack.Screen name="AssetExample" component={HomeScreen} />
            <Stack.Screen name="Home" component={HomePage} />
            </>
          ):(
            <Stack.Screen name="Home" component={HomePage} />
          )
          }

        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Annotations" component={Annotations}/>
         <Stack.Screen name="NoUser" component={NoUser}/>
        <Stack.Screen name="NoUserPomodoro" component={NoUserPomodoro}/>
        <Stack.Screen name="NoUserBreak" component={NoUserBreak}/>
        <Stack.Screen name="NoUserDashboard" component={NoUserDashboard}/>
        <Stack.Screen name="Idea1" component={Idea1} />
       
         <Stack.Screen name="Goals" component={Goals} />
         <Stack.Screen name="ToDo" component={ToDo} /> 
        <Stack.Screen name="Project" component={Project} />
        <Stack.Screen name="Work" component={Work} />
       
       
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      
        <Stack.Screen name="Pomodoro" component={Pomodoro} />
        <Stack.Screen name="Break" component={Break} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

       
