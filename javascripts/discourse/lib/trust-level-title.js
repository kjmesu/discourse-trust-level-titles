import { settings } from "virtual:theme";

export function getTrustLevelTitle(user) {
  if (!user || user.trust_level === undefined) {
    return null;
  }

  const trustLevelTitles = [
    settings.trust_level_0_title,
    settings.trust_level_1_title,
    settings.trust_level_2_title,
    settings.trust_level_3_title,
    settings.trust_level_4_title,
  ];

  return trustLevelTitles[user.trust_level] || null;
}
