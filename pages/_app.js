import {MDXProvider} from '@mdx-js/react';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import components from '../MDXComponents';
import theme from '../components/theme'
import Header from '../components/Header'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <MDXProvider components={components}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
  )
}

export default MyApp
