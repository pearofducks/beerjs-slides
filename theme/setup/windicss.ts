import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'
import ARplugin from 'windicss/plugin/aspect-ratio'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '**/*.vue'),
    ],
    exclude: [
      resolve(__dirname, 'node_modules'),
    ],
  },
  plugins: [ARplugin],
  shortcuts: {
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
}))
