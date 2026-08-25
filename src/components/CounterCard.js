import Blits from '@lightningjs/blits'

export default Blits.Component('CounterCard', {
  state() {
    return {
      count: 0,
      focused: false
    }
  },

  hooks: {
    init() {
      console.log('COUNTER INIT')
    },

    ready() {
      console.log('COUNTER READY')
    },

    focus() {
      this.focused = true
      console.log('COUNTER FOCUSED')
    },

    unfocus() {
      this.focused = false
      console.log('COUNTER UNFOCUSED')
    },

    destroy() {
      console.log('COUNTER DESTROYED')
    }
  },

  input: {
    enter() {
      this.count += 1
      console.log('COUNTER ENTER:', this.count)
    },

    down() {
      console.log('COUNTER DOWN')
      this.$emit('moveToMovieButton')
    }
  },

  template: `
    <Element
      w="400"
      h="220"
      :scale="$focused ? 1.05 : 1"
      :color="$focused ? '#2563eb' : '#222222'"
    >

      <Text
        x="200"
        y="60"
        mount="0.5"
        content="Counter"
        color="#aaaaaa"
        size="26"
      />

      <Text
        x="200"
        y="130"
        mount="0.5"
        :content="$count"
        color="#ffffff"
        size="42"
      />

    </Element>
  `
})