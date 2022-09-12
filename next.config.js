/** @type {import('next').NextConfig} */
const withOffline = require("next-offline");
const withTranslateRoutes = require("next-translate-routes/plugin");

module.exports = withTranslateRoutes(
    withOffline({
      i18n: {
        defaultLocale: "en",
        locales: ["en", "tr"],
        localeDetection: false
      },
      reactStrictMode: true,
      swcMinify: true,
    })
);
