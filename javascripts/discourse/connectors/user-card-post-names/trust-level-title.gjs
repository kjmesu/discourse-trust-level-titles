import Component from "@glimmer/component";
import { getTrustLevelTitle } from "../../lib/trust-level-title";

export default class TrustLevelTitle extends Component {
  static shouldRender(args) {
    return !args.user.title && getTrustLevelTitle(args.user);
  }

  get trustLevelTitle() {
    return getTrustLevelTitle(this.args.user);
  }

  <template>
    <div class="names__secondary user-title">{{this.trustLevelTitle}}</div>
  </template>
}
