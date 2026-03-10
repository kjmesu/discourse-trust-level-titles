import { apiInitializer } from "discourse/lib/api";
import { getTrustLevelTitle } from "../lib/trust-level-title";

export default apiInitializer("0.11.1", (api) => {
  api.registerValueTransformer("poster-name-user-title", ({ value, context }) => {
    return value || getTrustLevelTitle(context.user);
  });

  api.modifyClass("model:user", {
    pluginId: "trust-level-titles",

    get displayTitle() {
      return this.title || getTrustLevelTitle(this);
    },
  });
});
