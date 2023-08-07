const config = {
  // Backend config
  SENTRY_DSN: "https://6cfcc926adc8cc9f9356690e4c3c8b77@o4505647165276160.ingest.sentry.io/4505662832771077",
  STRIPE_KEY: "pk_test_51Nb0KSBfZ8OzKEApH6JJUZoG1WB4IM7YsleduKYrEdvQ3VZkZJRDPgY1thmgNO9zMQWUQZJh1G5hoj1yhVAXQYnZ00sBmNgCEC",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
