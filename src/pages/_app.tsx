import { type AppType } from "next/app";

import { api } from "y/utils/api";
import { ClerkProvider } from "@clerk/nextjs";

import "y/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
