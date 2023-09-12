import EcoscapeBar from '@components/NavBar/ecoscapeBar'
import Navbar from '@components/NavBar/navbar'
import '@styles/global.css'

const RootLayout = ( {children}) => {
  return (
    <html>
        <body>
          <EcoscapeBar/>
          <Navbar navStyle={'HomeNav'}/>
            {children}
        </body>
    </html>
  )
}

export default RootLayout