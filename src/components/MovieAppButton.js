import Blits from '@lightningjs/blits'

export default Blits.Component('MovieAppButton', {
  props: {
    label: String
  },

  state() {
    return {
      focused: false
    }
  },

  hooks: {
    focus() {
      this.focused = true
      console.log('MOVIE BUTTON FOCUSED')
    },

    unfocus() {
      this.focused = false
      console.log('MOVIE BUTTON UNFOCUSED')
    }
  },

  input: {
    enter() {
      console.log('MOVIE BUTTON ENTER')

      this.$emit('moveToMovieRow')
    },

    down() {
      console.log('MOVIE BUTTON DOWN')

      this.$emit('moveToMovieRow')
    },

    up() {
      console.log('MOVIE BUTTON UP')

      this.$emit('moveToCounter')
    }
  },

  template: `
    <Element
      w="400"
      h="100"
      :scale="$focused ? 1.05 : 1"
      :color="$focused ? '#2563eb' : '#222222'"
    >

      <Text
        x="200"
        y="50"
        mount="0.5"
        :content="$label"
        color="#ffffff"
        size="28"
      />

    </Element>
  `
})