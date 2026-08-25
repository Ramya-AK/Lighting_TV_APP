import Blits from '@lightningjs/blits'

export default Blits.Component('TitleCard', {
  props: {
    title: String
  },

  state() {
    return {
      focused: false
    }
  },

  hooks: {
    init() {
      console.log('TitleCard init:', this.title)
    },

    ready() {
      console.log('TitleCard ready:', this.title)
    },

    focus() {
      this.focused = true
      console.log('TitleCard focused:', this.title)
    },

    unfocus() {
      this.focused = false
      console.log('TitleCard unfocused:', this.title)
    },

    destroy() {
      console.log('TitleCard destroyed:', this.title)
    }
  },

  template: `
    <Element
      w="400"
      h="100"
      :scale="$focused ? 1.05 : 1"
    >

      <Element
        w="400"
        h="100"
        :color="$focused ? '#2563eb' : '#222222'"
      />

      <Text
        x="200"
        y="50"
        mount="0.5"
        :content="$title"
        color="#ffffff"
        size="28"
      />

    </Element>
  `
})