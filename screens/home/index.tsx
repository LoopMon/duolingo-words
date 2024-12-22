import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native"
import styles from "./styles"

const DuoWords = require("@/assets/images/duolingo-words.png")
const DuoBackground = require("@/assets/images/duolingo-background.png")
function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={DuoBackground} style={styles.background}>
        <Image source={DuoWords} style={styles.image} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>GitHub</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Home
