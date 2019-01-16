import React, { Component } from 'react';
import { 
    Modal,
     View, 
     Text ,
     TextInput,
      DatePickerIOS,
       TouchableWithoutFeedback, 
       TouchableOpacity
} from 'react-native';

import moment from 'moment'
import commonStyles from '../commonStyles'

const InitialState = {desc: '', date: new Date()}

export default class AddTask extends Component{
    state = { ...InitialState }
}