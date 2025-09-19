const defaultSEOConfig = {
  titleTemplate: "%s | Notex Hub",
  defaultTitle: "Notex Hub - A Tech Solutions",
  description: "Where Ideas Meet Impeccable Execution - Welcome to Notex Hub",
  canonical: "https://www.notexthub.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.notexthub.com",
    siteName: "Notex Hub",
    images: [
      {
        url: "https://www.notexthub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notex Hub Website",
      },
    ],
  },
  twitter: {
    handle: "@yourhandle",
    site: "@https://www.notexthub.com",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
