import React, { Component } from 'react'
import { 
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert
 } from 'react-native'
 import commonStyle from '../commonStyles'
 import backgroudImage from '../../assets/imgs/login.jpg'

 export default class Auth extends Component{
     state = {
         stageNew: false,
         name: '',
         email: '',
         senha: '',
         password: '',
         confirmPassword: '',
     }

     signinOrSignup = () => {
         if(this.state.stageNew){
             Alert.alert('Sucesso!', 'Criar conta')
         } else {
             Alert.alert('Sucesso!', 'Logar')
         }
     }

     render(){
         return(
             <ImageBackground source={backgroudImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
                    </Text>
                    {this.state.stageNew &&
                        <TextInput placeholder='Nome' style={styles.input} 
                            value={this.state.name}
                            onChangeText={name => this.setState({name})}
                    />}
                    <TextInput placeholder='email' style={styles.input} 
                            value={this.state.email}
                            onChangeText={email => this.setState({email})}
                    />
                    <TextInput placeholder='Senha' style={styles.input} 
                            value={this.state.password}
                            onChangeText={password => this.setState({password})}
                    />
                        {this.state.stageNew && 
                            <TextInput placeholder='Confirmação' style={styles.input} 
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({confirmPassword})}
                            />
                        }
                        
                        <TouchableOpacity onPress={this.signinOrSignup}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    {this.state.stageNew ? 'Registrar': 'Entrar'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity style={{ padding: 10 }} onPress={() => this.setState({stageNew: !this.state.stageNew})}>
                        <Text style={styles.buttonText}>
                            {this.state.stageNew ? 'Ja possui conta?' : 'Ainda nao possui conta'}
                        </Text>
                        </TouchableOpacity>
             </ImageBackground>
         )
     }
 }