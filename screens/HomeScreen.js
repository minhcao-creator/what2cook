import * as React from 'react';
import { StyleSheet, View, Alert, Text, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Award from '../assets/backgroundIMG.svg';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#FF5C01', 'rgba(255,92,0,0.6)','rgba(128,48,0,0.4)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)', 'rgba(0,0,0,1)', 'transparent']}
                style={styles.background}
            />
            <Award style = {{marginTop: 100}}/>
            <Text style={styles.text1}> WHAT2COOK </Text>
            <Text style={styles.text2}> Cho FeedBack Chân Thực Để Giúp Nhóm Em 10 Điểm Nhá. </Text>
            <TouchableOpacity 
                onPress={() => {}}
                style={styles.button}
            >
                <Text style = {{fontSize: 16,
                                color: '#ffffff',
                                fontFamily: 'Roboto',}}>Bắt Đầu</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF"
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#C67C4E',
        paddingLeft: 140,
        paddingRight: 140,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 20
    },
    text1: {
        fontSize: 40,
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        padding: 40
    },
    text2: {
        fontSize: 16,
        color: '#fff',
        width: 290,
        textAlign: 'center',
        marginBottom: 100
    },
});
