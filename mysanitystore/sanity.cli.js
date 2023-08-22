import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: 'production',
  },
})
