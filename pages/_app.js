import "../styles/globals.css";
import Amplify from "aws-amplify";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import awsSettings from "../src/aws-exports";

Amplify.configure({
  ...awsSettings,
  ssr: true,
});

Amplify.addPluggable(new AmazonAIPredictionsProvider());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
