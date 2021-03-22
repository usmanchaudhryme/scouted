import 'tailwindcss/tailwind.css'
import { Windmill } from '@windmill/react-ui'
import myTheme from '../components/myTheme'
function MyApp({ Component, pageProps }) {

  return <Windmill theme={myTheme}><Component {...pageProps} /></Windmill>
}

export default MyApp
