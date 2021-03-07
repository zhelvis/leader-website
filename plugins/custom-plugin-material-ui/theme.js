import { responsiveFontSizes, createMuiTheme } from '@material-ui/core/styles'

const heading = {
  fontFamily: "'Noto Sans', sans-serif",
}

export default responsiveFontSizes(
  createMuiTheme({
    typography: {
      h1: heading,
      h2: heading,
      h3: heading,
      h4: heading,
      h5: heading,
      h6: heading,
    },
    palette: {
      primary: {
        main: '#0000FF',
      },
      secondary: {
        main: '#93DCFF'
      }
    },
  })
)
