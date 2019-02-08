import React from 'react'
import { 
    createSwitchNavigator, 
    createDrawerNavigator,
    createAppContainer 
} from 'react-navigation'
import Agenda from '../Screens/Agenda'
import Auth from '../Screens/Auth'
import commonStyles from '../Styles/commonStyles'
 
const MenuRoutes = {
    Today: {
        name: 'Today',
        screen: props => 
            <Agenda title='Hoje' daysAhead={0} {...props} />,
        navigationOptions: {
            title: 'Hoje'
        }
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen: props =>
            <Agenda title='Amanhã' daysAhead={1} {...props} />,
        navigationOptions: {
            title: 'Amanhã'
        }
    },
    Week: {
        name: 'Week',
        screen: props => 
            <Agenda title='Semana' daysAhead={7} {...props} />,
        navigationOptions: {
            title: 'Semana'
        }
    },
    Month: {
        name: 'Month',
        screen: props => 
            <Agenda title='Mês' daysAhead={30} {...props} />,
        navigationOptions: {
            title: 'Mês'
        }
    }
}
 
const MenuConfig = {
    initialRouteName: 'Today',
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080'
        }
    }
}
 
const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)
 
const MainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: MenuNavigator
    }
}
 
const MainNavigator = createSwitchNavigator(MainRoutes, {initialRouteName: 'Auth'})
const App = createAppContainer(MainNavigator)
 
export default App