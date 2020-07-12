import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'mdiSvg' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  }
}

export default new Vuetify(opts)
