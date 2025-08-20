const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

// Cargar variables de entorno
const webpack = require('webpack')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  // Asegurar que las variables de entorno estén disponibles
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_APP_FIREBASE_API_KEY: JSON.stringify(process.env.VUE_APP_FIREBASE_API_KEY || "AIzaSyBvXD9owAIKLE-jGH6MQ0uIq9NwF9gVnxM"),
          VUE_APP_FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || "login-dev-areatech.firebaseapp.com"),
          VUE_APP_FIREBASE_PROJECT_ID: JSON.stringify(process.env.VUE_APP_FIREBASE_PROJECT_ID || "login-dev-areatech"),
          VUE_APP_FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || "login-dev-areatech.appspot.com"),
          VUE_APP_FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || "474940460782"),
          VUE_APP_FIREBASE_APP_ID: JSON.stringify(process.env.VUE_APP_FIREBASE_APP_ID || "1:474940460782:web:252384f203434100e8edff"),
          VUE_APP_FIREBASE_MEASUREMENT_ID: JSON.stringify(process.env.VUE_APP_FIREBASE_MEASUREMENT_ID || "G-2Q1Q1W11SS"),
          VUE_APP_API_URL: JSON.stringify(process.env.VUE_APP_API_URL || "https://tu-api.ejemplo.com"),
          VUE_APP_API: JSON.stringify(process.env.VUE_APP_API || "{\"url\":\"https://tu-api.ejemplo.com\",\"timeout\":15000}"),
          VUE_APP_Nombre: JSON.stringify(process.env.VUE_APP_Nombre || "HERRAMETAL"),
          VUE_APP_Quien_Soy: JSON.stringify(process.env.VUE_APP_Quien_Soy || "HERRAMETAL")
        }
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2'),
            to: path.resolve(__dirname, 'public/fonts/DMSans-Regular.woff2')
          },
          {
            from: path.resolve(__dirname, 'node_modules/@fontsource/dm-sans/files/dm-sans-latin-500-normal.woff2'),
            to: path.resolve(__dirname, 'public/fonts/DMSans-Medium.woff2')
          },
          {
            from: path.resolve(__dirname, 'node_modules/@fontsource/dm-sans/files/dm-sans-latin-700-normal.woff2'),
            to: path.resolve(__dirname, 'public/fonts/DMSans-Bold.woff2')
          },
          {
            from: path.resolve(__dirname, 'node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff2'),
            to: path.resolve(__dirname, 'public/fonts/materialdesignicons-webfont.woff2')
          },
          {
            from: path.resolve(__dirname, 'node_modules/@mdi/font/fonts/materialdesignicons-webfont.woff'),
            to: path.resolve(__dirname, 'public/fonts/materialdesignicons-webfont.woff')
          }
        ]
      })
    ]
  }
}