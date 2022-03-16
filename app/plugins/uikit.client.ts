import UIkit from "uikit/dist/js/uikit-core";
import Icons from "uikit/dist/js/uikit-icons";

export default defineNuxtPlugin(() => {
  UIkit.use(Icons);
  UIkit.container = "#__nuxt";

  return {
    provide: {
      uikit: UIkit
    }
  }
})
