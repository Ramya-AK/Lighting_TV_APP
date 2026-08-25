import Blits from '@lightningjs/blits'
import MovieCard from './MovieCard.js'

export default Blits.Component('MovieRow', {
  components: {
    MovieCard
  },

  state() {
    return {
      movies: [
        {
          title: 'Inception',
          rating: '⭐ 8.8',
          year: '2010'
        },
        {
          title: 'Interstellar',
          rating: '⭐ 8.7',
          year: '2014'
        },
        {
          title: 'Avatar',
          rating: '⭐ 7.8',
          year: '2009'
        },
        {
          title: 'The Dark Knight',
          rating: '⭐ 9.0',
          year: '2008'
        }
      ],

      selectedIndex: 0
    }
  },

 hooks: {
  ready() {
    console.log('MOVIE ROW READY')
  },

  focus() {
    console.log('MOVIE ROW FOCUSED')

    // Always focus first movie when MovieRow receives focus
    this.selectedIndex = 0
    this.focusMovie()
  },

  unfocus() {
    console.log('MOVIE ROW UNFOCUSED')
  }
},

  input: {
    left() {
      console.log('MOVIE ROW LEFT')

      if (this.selectedIndex > 0) {
        this.selectedIndex--
        this.focusMovie()
      }
    },

    right() {
      console.log('MOVIE ROW RIGHT')

      if (this.selectedIndex < this.movies.length - 1) {
        this.selectedIndex++
        this.focusMovie()
      }
    },

    up() {
      console.log('MOVIE ROW UP')

      this.$emit('moveToMovieButton')
    },

    enter() {
      console.log(
        'MOVIE ENTER:',
        this.movies[this.selectedIndex].title
      )
    }
  },

  methods: {
    focusMovie() {
      const movie = this.$select(
        `movie${this.selectedIndex}`
      )

      if (movie) {
        movie.$focus()
      }
    }
  },

  template: `
    <Element
      w="1760"
      h="350"
    >

      <Text
        y="-60"
        content="Popular Movies"
        color="#ffffff"
        size="32"
      />

      <Element
        :for="(movie, index) in $movies"
        :x="$index * 320"
      >

        <MovieCard
          :ref="'movie' + $index"
          :title="$movie.title"
          :rating="$movie.rating"
          :year="$movie.year"
        />

      </Element>

    </Element>
  `
})