// app/layout.tsx
import { PropsWithChildren } from "react";
import { Providers } from "./providers";

import { Metadata, Viewport } from "next";
import { theme } from "@chakra-ui/react";

const APP_NAME = "My Portfolio";
const APP_DEFAULT_TITLE = "Recep TOK | Front-End Developer";
const APP_TITLE_TEMPLATE = "%s - Recep TOK Portfolio";
const APP_DESCRIPTION =
  "Showcasing the projects and skills of Recep TOK, a passionate front-end developer.";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "profile",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: "/images/profile.jpg",
        alt: "Recep TOK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: "/images/profile.jpg",
        alt: "Recep TOK",
      },
    ],
  },
};

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
  viewportFit: "cover",
  themeColor: theme.colors.black,
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={"roboto"}>
      <body className="bg-gray-50 text-gray-900 font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
