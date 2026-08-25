import Blits from '@lightningjs/blits'

export default Blits.Component('MovieCard', {
  props: {
    title: String,
    rating: String,
    year: String
  },

  state() {
    return {
      focused: false
    }
  },

  hooks: {
    init() {
      console.log('MovieCard INIT:', this.title)
    },

    ready() {
      console.log('MovieCard READY:', this.title)
    },

    focus() {
      this.focused = true
      console.log('MOVIE CARD FOCUSED:', this.title)
    },

    unfocus() {
      this.focused = false
      console.log('MOVIE CARD UNFOCUSED:', this.title)
    },

    destroy() {
      console.log('MovieCard DESTROY:', this.title)
    }
  },

  template: `
    <Element
      w="280"
      h="280"
      :scale="$focused ? 1.08 : 1"
    >

      <Element
        w="280"
        h="180"
        :color="$focused ? '#2563eb' : '#292929'"
      />

      <Text
        x="10"
        y="195"
        :content="$title"
        color="#ffffff"
        size="22"
      />

      <Text
        x="10"
        y="230"
        :content="$rating"
        color="#aaaaaa"
        size="18"
      />

      <Text
        x="10"
        y="255"
        :content="$year"
        color="#777777"
        size="16"
      />

    </Element>
  `
})