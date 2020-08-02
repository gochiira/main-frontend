import Vue from 'vue'
import { Editor, Viewer } from '@toast-ui/vue-editor'

import 'codemirror/lib/codemirror.css'
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'

Vue.component('editor', Editor)
Vue.component('viewer', Viewer)