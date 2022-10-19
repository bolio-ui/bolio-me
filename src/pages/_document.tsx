import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { CssBaseline } from '@bolio-ui/core'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = CssBaseline.flush()

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      )
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(){
                if (!window.localStorage) return;
                if (window.localStorage.getItem('theme') === 'gray') {
                  document.documentElement.style.background = '#121214';
                  document.body.style.background = '#121214';
                } else {
                  document.documentElement.style.background = '#FFFFFF';
                  document.body.style.background = '#FFFFFF';
                }
              })()`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
