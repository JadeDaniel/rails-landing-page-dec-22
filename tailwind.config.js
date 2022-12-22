module.exports = {
  theme: {
    extend: {
      colors: {
        "monotelo-blue": "#2B689C",
        "monotelo-dark-blue": "#134E6F",
      }
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ]
}
