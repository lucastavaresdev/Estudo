import React,{Component} from 'react'
import {StyleSheet, Text, View, ImageBackgroud} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/todayImage.jpg'
import commonStyles from '../commonStyles'

export default class Agenda extends Component {
    render(){
        return(
            <View style={styles.container}>
                <ImageBackgroud source={todayImage} style={styles.backgroud}>
                    <View style={styles.titlebar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd, D,[de] MMMM')}
                        </Text>
                    </View>
                </ImageBackgroud>
                <View style={styles.taskContainer}>
                    <Text>Tarefa 1</Text>
                    <Text>Tarefa 2</Text>
                    <Text>Tarefa 3</Text>
                    <Text>Tarefa 3</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroud: {
        flex: 3,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
            fontFamily: commonStyles.fontFamily,
            color: commonStyles.colors.secondary,
            fontSize: 50,
            marginLeft: 20,
            marginBottom: 10,
        },
        subtitle: {
            fontFamily: commonStyles.fontFamily,
            color: commonStyles.colors.secondary,
            fontSize: 20,
            marginLeft: 20,
            marginBottom: 30,
        },
        taksContainer: {
        flex: 7,
     }
})