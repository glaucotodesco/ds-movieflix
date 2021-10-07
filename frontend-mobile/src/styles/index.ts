import {Dimensions, StyleSheet} from "react-native";
import { color } from "react-native-reanimated";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

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
        fontFamily: 'OpenSans_400Regular',
        fontSize: 36,
        color: colors.light,
        lineHeight: 49,
        textAlign: "center",
        letterSpacing: 1,
        marginBottom: 40,
      
    },
    loginButtonTitle :{
        fontFamily: 'OpenSans_700Bold',
        fontSize: 20,
        lineHeight: 27
    },
    headerTitle :{
        fontSize: 24,
        lineHeight: 33,
        color: colors.dark,
        marginLeft: 18,
        fontFamily: 'OpenSans_700Bold'
    },
    logoutButtonTitle : {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 14,
       
        lineHeight: 19,
        color: colors.dark
    },
    movieTitle : {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 20,
        lineHeight: 27,
        color: colors.light,
    },
    movieYear : {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 16,
        lineHeight: 22,
        color: colors.primary
    },
    movieSubTitle : {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 14,
        lineHeight: 19,
        color: colors.light
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
        shadowRadius: 3.84,
        marginBottom: 20
    },
    movieCard :{
        backgroundColor: colors.card,
        height: imageHeight + 150,
        width: "100%",
        borderRadius: 4,
        alignItems: "center",
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 20
    },
    textInput: {
        width: "100%",
        height: 47,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 4,
        padding: 10,
        backgroundColor: colors.light,
        marginBottom: 20,
        fontFamily: 'OpenSans_400Regular',
        fontSize: 16,
        color: colors.medium
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
    movieImg : {
        marginTop: 26,
        width: imageWidth-20,
        height: imageHeight,
        resizeMode: 'stretch',
    },
    scrollContainer : {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.backGround,
        paddingTop: 20,
        paddingBottom: 33,
        paddingLeft: 10,
        paddingRight: 10,
        
    },
    movieTextContainer :{
        padding: 10,
        height: "100%"
    }
});


const loginPage = StyleSheet.create({
    form :{
        paddingTop: 60,
        justifyContent: "space-around",
        width: "92%"
    },
    inputContainer:{
        marginBottom: 36
    },
    loginButton :{
        backgroundColor: colors.primary,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        marginTop: 40
    },
});


export  {colors, theme, loginPage, text};
