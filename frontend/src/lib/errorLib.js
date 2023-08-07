import * as Sentry from "@sentry/browser";
import config from "../config";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({
    dsn: "https://6cfcc926adc8cc9f9356690e4c3c8b77@o4505647165276160.ingest.sentry.io/4505662832771077",
  });
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
    let message = error.toString();
  
    // Auth errors
    if (!(error instanceof Error) && error.message) {
      message = error.message;
    }
  
    alert(message);
  }