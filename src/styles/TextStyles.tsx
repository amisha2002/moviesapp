import { StyleSheet, Dimensions } from "react-native";
import Colors from "../assets/colors/Colors";
import Fonts from "../assets/fonts/Font"
const GlobalStyles = StyleSheet.create({
    titleHeadingImg: {
        fontFamily: Fonts.OpenSansBold,
        fontWeight: 700,
        fontSize: 32,
        color: Colors.lightGray,
        marginHorizontal: 10,
        marginTop: 140,
        
    },
    titleHeading: {
      fontWeight: 700,
      fontSize: 32,
      color: Colors.lightGray,
      marginHorizontal: 10,
     
  },
    subtitleHeading: {
        fontFamily: Fonts.OpenSansBold,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 24,
        color: Colors.lightGray,
        marginHorizontal: 10,
        marginTop: 10
    },
    label: {
        marginHorizontal: 10,
        marginTop: 24
        //padding: 10,
    },
    inputTextField: {
        height: 50,
        marginHorizontal: 10,
        borderWidth: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: "transparent",
        padding: 10,
      // marginTop:8
      },
      errorMessage: {
        color: Colors.errorMsgColor,
        marginHorizontal: 10,
        marginTop: 4
      },
      checkBox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: Colors.amaranthPurple,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginTop: 8,
        marginLeft: 10
      },
      checkedBox: {
        backgroundColor: "transparent",
      },
      filledButton: {
        marginTop: 8,
        marginHorizontal: 10,
        height: 58,
      },
      backgroundImage: {
        flex: 1,
       // justifyContent: 'cover',
      },
      buttonContainer: { 
        height: 58,
        borderRadius: 10,
        marginTop: 8,
        justifyContent: 'center',
        marginHorizontal: 10,
        overflow: "hidden",
        backgroundColor: Colors.amaranthPurple
        
    }, 
    buttonText: {
        justifyContent: 'center',
        color: "white"
    }
  });

  export default GlobalStyles;