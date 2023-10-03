import { View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons'
import SignupScreen from './SignupScreen'

export default function LoginScreen({ navigation }) {
    const[email, setEmail] = React.useState("");
    const[password, setPassword] = React.useState("");

    const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>Đăng nhập</Text>

                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Feather name="mail" size={22} color="#7C808D" />
                        </View>
                        <TextInput 
                            style={styles.input}
                            keyboardType='email-address'
                            placeholder='Địa chỉ Email'
                            placeholderTextColor="#7C808D"
                            selectionColor="#3662AA"
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.icon}>
                            <Feather name="lock" size={22} color="#7C808D" />
                        </View>
                        <TextInput 
                            style={styles.input}
                            keyboardType='visible-password'
                            placeholder='Mật khẩu'
                            secureTextEntry={!passwordIsVisible}
                            placeholderTextColor="#7C808D"
                            selectionColor="#3662AA"
                            onChangeText={setPassword}
                            value={password}
                        />
                        <TouchableOpacity 
                            style={styles.passwordVisibleButton}
                            onPress={() => setPasswordIsVisible(!passwordIsVisible)}
                        >
                            <Feather name={passwordIsVisible ? 'eye' : 'eye-off'} size={20} color="#7C808D" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.forgotPasswordButton}>
                        <Text style={styles.forgotPasswordButtonText}>Quên mật khẩu?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Đăng nhập</Text>
                    </TouchableOpacity>

                    <View style={styles.orContainer}>
                        <View style={styles.orLine} />
                        <Text style={styles.orText}>OR</Text> 
                        <View style={styles.orLine} />
                    </View>

                    <TouchableOpacity style={styles.googleButton}>
                        <Image style={styles.googleLogo} source={require('../assets/google-logo.png')} />
                        <Text style={styles.googleButtonText}>Đăng nhập bằng Google</Text>
                    </TouchableOpacity>

                    <View style={styles.signupContainer}>
                        <Text style={styles.signupContainerText}>Bạn đã có tài khoản?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignupScreen')}
                        >
                            <Text style={styles.signupButtonText}>Đăng kí ngay</Text>
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
        backgroundColor: "#fff",
    },
    content: {
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 40,
        textAlign: "center",
    },
    inputContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        position: "relative",
    },
    icon: {
        marginRight: 15,
    },
    input: {
        flex: 1,
        borderBottomWidth: 1.5,
        paddingBottom: 10,
        borderBottomColor: "#eee",
        fontSize: 16,
    },
    passwordVisibleButton: {
        position: "absolute",
        right: 0,
    },
    forgotPasswordButton: {
        alignSelf: "flex-end",
    },
    forgotPasswordButtonText: {
        color: "#C67C4E",
        fontSize: 16,
        fontWeight: "500",
    },
    loginButton: {
        backgroundColor: "#C67C4E",
        padding: 14,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: '#7C808D',
        shadowOffset: {width: 0, height: 10,},
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    loginButtonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    orLine: {
        height: 1,
        backgroundColor: "#eee",
        flex: 1,
    },
    orText: {
        color: "#C67C4E",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
    },
    googleButton: {
        backgroundColor: "#F2F6F2",
        padding: 14,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        position: 'relative',
    },
    googleButtonText: {
        color: "#4E5867",
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    googleLogo: {
        width: 20.03,
        height: 20.44,
        position: 'absolute',
        left: 14,
    },
    signupContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 40,
    },
    signupContainerText: {
        marginRight: 10,
        fontSize: 16,
        color: '#7C808D',
    },
    signupButtonText: {
        fontSize: 16,
        color: '#C67C4E',
        fontWeight: '500',
    },
})