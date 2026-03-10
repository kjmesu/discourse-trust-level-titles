import { apiInitializer } from "discourse/lib/api";
import { settings } from "virtual:theme";

export default apiInitializer("0.11.1", (api) => {
  api.registerValueTransformer("poster-name-user-title", ({ value, context }) => {
    if (value) {
      return value;
    }

    const user = context.user;
    if (!user || user.trust_level === undefined) {
      return value;
    }

    const trustLevelTitles = [
      settings.trust_level_0_title,
      settings.trust_level_1_title,
      settings.trust_level_2_title,
      settings.trust_level_3_title,
      settings.trust_level_4_title,
    ];

    const defaultTitle = trustLevelTitles[user.trust_level];
    return defaultTitle || value;
  });
});
