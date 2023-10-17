import HeaderComponent from '@/components/HeaderComponent/HeaderComponent'
import FooterComponent from '@/components/FooterComponent/FooterComponent'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <HeaderComponent/>
    <div className="container mx-auto min-h-screen">
    <Component {...pageProps} />
    </div> 
    <FooterComponent/>    
    </>
  )
};
