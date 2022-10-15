import { StyleSheet } from "react-native";

exports.styles = StyleSheet.create({
  textTitle: {
    backgroundColor: '#fff',
    color: "gray",
    fontSize: "1.5rem",
    fontWeight: "bold",
    
  },
  formContext: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingLeft: '15%',
    paddingRight: '15%',
  },
  textForm: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30
  },
  textInput: {
    height: 40,
    paddingLeft: 10,
    marginVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: -50,
    marginTop: -20
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 50
  },
  button: {
    backgroundColor: '#7bb7e0',
    alignItems: 'center',
    padding: '5%',
    borderRadius: 50,
    justifyContent: "flex-start",
    marginTop: 50
  },
  textButton: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: "bold"
  },
  registerBox: {
    marginTop: 20,
    alignItems: 'center'
  },
  registerText: {
    fontSize: 18,
    color: "#7bb7e0",
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },

  /** */

  registerTitleBox: {
    marginTop: 40,
    marginBottom: 30,
    alignItems: 'center'
  },
  registerTitle: {
    fontSize: 21,
    fontWeight: 'bold'
  }
});
