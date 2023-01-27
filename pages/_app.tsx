import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/headerStyle.css";
import "../styles/orangeBtnStyle.css";
import "../styles/deviceIntroBlockStyle.css";
import "../styles/liveDemoStyle.css";
import "../styles/platformBlockStyle.css";
import "../styles/usecaseBlockStyle.css";
import "../styles/blackCardStyle.css";
import "../styles/customerStoryBlockStyle.css";
import "../styles/whyFingerStyle.css";
import "../styles/forDeveloperBlockStyle.css";
import "../styles/securityPrivacyBlockStyle.css";
import "../styles/pricingBlockStyle.css";
import "../styles/videoIntroBlockStyle.css";
import "../styles/footerStyle.css";
// 
import "../styles/createIdealBlockStyle.css"
import '../styles/experienceBlockStyle.css'
import '../styles/happyCustomerStyle.css'
import '../styles/feedbackCardStyle.css'
import '../styles/subscribeBlockStyle.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
