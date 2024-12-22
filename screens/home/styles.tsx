import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#55FF55",
    paddingTop: 20,
  },
  background: {
    flex: 1,
    alignItems: "center",
    gap: 30,
  },
  image: {
    height: 300,
  },
  btn: {
    width: 300,
    maxWidth: 350,
    height: 100,
    backgroundColor: "#5555FF",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#27277D",
    justifyContent: "center",
    boxShadow: "0px 3px 0px 27277D",
  },
  btnText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: 600,
    textAlign: "center",
  },
})

export default styles
