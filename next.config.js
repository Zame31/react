const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require('next/constants')
  
  module.exports = (phase) => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
      phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  
    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  
    const env = {
      API_URL: (() => {
        if (isDev) return 'http://api.sahate.basys.co.id/'
        if (isProd) return 'http://api.sahate.basys.co.id/'
        if (isStaging) return 'http://api.sahate.basys.co.id/'
        return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
    }
  
    // next.config.js object
    return {
      env,
    }
  }