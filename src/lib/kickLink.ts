/**
 * Smart Kick Link & App Deep Linking Handler
 * Automatically launches the native Kick mobile app on Android/iOS
 * with seamless fallback to the web browser if the app is not installed.
 */

export const KICK_WEB_URL = "https://kick.com/silvatshu";

// Android native intent URL targeting com.kick.mobile with fallback to web URL
export const KICK_ANDROID_INTENT =
  "intent://kick.com/silvatshu#Intent;scheme=https;package=com.kick.mobile;S.browser_fallback_url=https%3A%2F%2Fkick.com%2Fsilvatshu;end";

/**
 * Returns the best Kick URL based on the user's operating system
 */
export function getKickAppUrl(): string {
  if (typeof navigator === "undefined") return KICK_WEB_URL;

  const ua = navigator.userAgent || "";
  const isAndroid = /android/i.test(ua);

  if (isAndroid) {
    return KICK_ANDROID_INTENT;
  }

  return KICK_WEB_URL;
}

/**
 * Click handler that intelligently redirects Android users to the native Kick app
 */
export function handleKickClick(e?: React.MouseEvent): void {
  if (typeof navigator === "undefined") return;

  const ua = navigator.userAgent || "";
  const isAndroid = /android/i.test(ua);

  if (isAndroid) {
    if (e) {
      e.preventDefault();
    }
    window.location.href = KICK_ANDROID_INTENT;
  }
}
