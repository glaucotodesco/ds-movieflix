import {StyleSheet} from "react-native";
import { color } from "react-native-reanimated";

const colors = {
    primary: "#FFC700",
    backGround: "#525252",
    card: "#6C6C6C",
    light: "#FFFFFF",
    medium: "#9E9E9E",
    dark: "#000000",
    border: "#E1E1E1"
};

const text = StyleSheet.create({
    loginTitle: {
        fontSize: 36,
        fontWeight: "normal",
        color: colors.light,
        lineHeight: 49,
        textAlign: "center",
        letterSpacing: 1,
        marginBottom: 40
    },
    loginButtonTitle :{
        fontWeight: "bold",
        fontSize: 20,
        fontStyle: "normal",
        lineHeight: 27
    }
});

const theme = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.backGround,
        paddingTop: 15,
        paddingBottom: 33,
        paddingLeft: 10,
        paddingRight: 10,
        
    },
    card :{
        backgroundColor: colors.card,
        height: "100%",
        width: "100%",
        borderRadius: 4,
        alignItems: "center",
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    primaryButton :{
        backgroundColor: colors.primary,
        height: 50,
        width: 266,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
 
    textInput: {
        width: 265,
        height: 47,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 4,
        padding: 10,
        backgroundColor: colors.light,
        marginBottom: 20
    },
});


const login = StyleSheet.create({
    form :{
        paddingTop: 60,
        justifyContent: "space-around",
    },
    inputContainer:{
        marginBottom: 36
    }
});

export  {colors, theme, login, text};
