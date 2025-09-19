const defaultSEOConfig = {
  titleTemplate: "%s | Notex Hub",
  defaultTitle: "Notex Hub - A Tech Solutions",
  description: "Where Ideas Meet Impeccable Execution - Welcome to Notex Hub",
  canonical: "https://www.notexhub.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.notexhub.com",
    siteName: "Notex Hub",
    images: [
      {
        url: "https://www.notexhub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notex Hub Website",
      },
    ],
  },
  twitter: {
    handle: "@yourhandle",
    site: "@https://www.notexhub.com",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
