import React from 'react'
import { StyleSheet, Text, View  , TextInput} from 'react-native'
import tw from "tailwind-react-native-classnames"
export default function LogInput({isPassword = false , placeholder , onChange}) {
    return (
            <TextInput onChange={onChange} placeholder={placeholder} selectionColor='white' placeholderTextColor="#a1a1a1" secureTextEntry={isPassword} style={tw.style(`w-4/6 border-b-2 border-white mb-5 p-1 h-7 text-white`)} />
         
    )
}

const styles = StyleSheet.create({})
