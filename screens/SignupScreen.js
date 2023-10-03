import { View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons'

export default function SignupScreen({ navigation }) {
    const[username, setUsername] = React.useState("");
    const[phone, setPhone] = React.useState("");
    const[email, setEmail] = React.useState("");
    const[password, setPassword] = React.useState("");

    const [passwordIsVisible, setPasswordIsVisible] = React.useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>Đăng kí</Text>

                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Feather name='user' size={22} color='#7C808D' />
                        </View>
                        <TextInput 
                            style={styles.input}
                            placeholder='Họ Tên'
                            placeholderTextColor='#7C808D'
                            selectionColor="#3662AA"
                            onChangeText={setUsername}
                            value={username}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Feather name='phone' size={22} color='#7C808D' />
                        </View>
                        <TextInput 
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder='Số điện thoại'
                            placeholderTextColor='#7C808D'
                            selectionColor="#3662AA"
                            onChangeText={setPhone}
                            value={phone}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Feather name='mail' size={22} color='#7C808D' />
                        </View>
                        <TextInput 
                            style={styles.input}
                            keyboardType='email-address'
                            placeholder='Địa chỉ Email'
                            placeholderTextColor='#7C808D'
                            selectionColor="#3662AA"
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Feather name='lock' size={22} color='#7C808D' />
                        </View>
                        <TextInput 
                            style={styles.input}
                            keyboardType='visible-password'
                            placeholder='Mật khẩu'
                            secureTextEntry={!passwordIsVisible}
                            placeholderTextColor='#7C808D'
                            selectionColor="#3662AA"
                            onChangeText={setPassword}
                            value={password}
                        />
                        <TouchableOpacity
                            style={styles.passwordVisibleButton}
                            onPress={() => setPasswordIsVisible(!passwordIsVisible)}
                        >
                            <Feather name={passwordIsVisible ? 'eye' : 'eye-off'} size={20} color='#7C808D'></Feather>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                        style={styles.signupButton}
                        onPress={() => {}}
                    >
                        <Text style={styles.signupButtonText}>Đăng kí</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.loginContainer}>
                        <Text style={styles.loginContainerText}>Bạn đã có tài khoản?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('LoginScreen')}
                        >
                            <Text style={styles.loginButtonText}>Đăng nhập ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        position: 'relative',
    },
    icon: {
        marginRight: 15,
    },
    input: {
        flex: 1,
        borderBottomWidth: 1.5,
        paddingBottom: 10,
        borderBottomColor: '#eee',
        fontSize: 16,
    },
    signupButton: {
        backgroundColor: '#C67C4E',
        padding: 14,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: '#7C808D',
        shadowOffset: {width: 0, height: 10,},
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    signupButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    loginContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 40,
    },
    loginContainerText: {
        marginRight: 10,
        fontSize: 16,
        color: '#7C808D',
    },
    loginButtonText: {
        fontSize: 16,
        color: '#C67C4E',
        fontWeight: '500',
    },
    passwordVisibleButton: {
        position: 'absolute',
        right: 0,
    }

})