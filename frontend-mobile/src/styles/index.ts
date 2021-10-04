import {StyleSheet} from "react-native";

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
        marginBottom: 40,
        fontFamily: "Open Sans"
    },
    loginButtonTitle :{
        fontWeight: "bold",
        fontSize: 20,
        fontStyle: "normal",
        lineHeight: 27
    },
    headerTitle :{
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 33,
        color: colors.dark,
        marginLeft: 18
    },
    logoutButtonTitle : {
        fontStyle: "normal",
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 19,
        color: colors.dark
    }
});

const theme = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.backGround,
        paddingTop: 20,
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
 
    textInput: {
        width: 265,
        height: 47,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 4,
        padding: 10,
        backgroundColor: colors.light,
        marginBottom: 20,
        
    
    },
    logoutButton :{
        backgroundColor: colors.primary,
        height: 30,
        width: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.dark,
        marginRight: 10
    },
});


const loginPage = StyleSheet.create({
    form :{
        paddingTop: 60,
        justifyContent: "space-around",
    },
    inputContainer:{
        marginBottom: 36
    },
    loginButton :{
        backgroundColor: colors.primary,
        height: 50,
        width: 266,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
});



export  {colors, theme, loginPage, text};
