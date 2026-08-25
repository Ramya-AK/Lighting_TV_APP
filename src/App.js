import Blits from '@lightningjs/blits'
import Home from './pages/Home.js'

export default Blits.Application({
  components: {
    Home
  },

  template: `
    <Element
      w="1920"
      h="1080"
      color="#000000"
    >

      <Home />

    </Element>
  `
})