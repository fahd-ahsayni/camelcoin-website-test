import { store } from "@/config/store";
import { Provider } from "react-redux";

import "@/i18n";
import "@/styles/globals.css";


import { ThemeProvider } from "@/client/material-tailwind";
import Navbar from "@/components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="absolute top-0 w-full z-[9999]">
          <Navbar />
        </div>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
