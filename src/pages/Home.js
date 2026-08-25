import Blits from '@lightningjs/blits'

import CounterCard from '../components/CounterCard.js'
import MovieAppButton from '../components/MovieAppButton.js'
import MovieRow from '../components/MovieRow.js'

export default Blits.Component('Home', {
  components: {
    CounterCard,
    MovieAppButton,
    MovieRow
  },

  state() {
    return {
      movieAppVisible: false
    }
  },

  template: `
    <Element
      w="1920"
      h="1080"
      color="#101010"
    >

      <CounterCard
        ref="counter"
        x="700"
        y="150"
      />

      <MovieAppButton
        ref="movieButton"
        x="700"
        y="450"
        label="Open Movie App"
      />

      <Element
        :alpha="$movieAppVisible ? 1 : 0"
      >

        <MovieRow
          ref="movieRow"
          x="80"
          y="700"
        />

      </Element>

    </Element>
  `,

  hooks: {
    ready() {
      // Initial focus
      this.$select('counter').$focus()

      // Movie button → Movie row
      this.$listen('moveToMovieRow', () => {
        console.log('HOME: MOVING TO MOVIE ROW')

        this.movieAppVisible = true

        this.$select('movieRow').$focus()
      })

      // Movie row → Movie button
      this.$listen('moveToMovieButton', () => {
        console.log('HOME: MOVING TO MOVIE BUTTON')

        this.$select('movieButton').$focus()
      })

      // Movie button → Counter
      this.$listen('moveToCounter', () => {
        console.log('HOME: MOVING TO COUNTER')

        this.$select('counter').$focus()
      })
    }
  }
})