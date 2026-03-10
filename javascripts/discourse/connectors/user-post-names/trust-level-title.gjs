import Component from "@glimmer/component";
import { getTrustLevelTitle } from "../../lib/trust-level-title";

export default class TrustLevelTitle extends Component {
  static shouldRender(args) {
    const user = args.model || args.user;
    return !user?.title && getTrustLevelTitle(user);
  }

  get trustLevelTitle() {
    const user = this.args.model || this.args.user;
    return getTrustLevelTitle(user);
  }

  <template>
    <div class="user-profile-names__title">{{this.trustLevelTitle}}</div>
  </template>
}
