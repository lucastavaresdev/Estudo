import React,{Componenet} from 'react'
import {StyleSheet, Text, View, ImageBackgroud} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/todayImage.jpg'
import commonStyles from '../commonStyles'

export default class Agenda extends Component {
    render(){
        return(
            <View style={StyleSheet.container}>
                <ImageBackgroud source={todayImage} style={styles.backgroud}>
                    <View style={styles.titlebar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd, D,[de] MMMM')}
                        </Text>
                    </View>
                </ImageBackgroud>
            </View>
        )
    }
}