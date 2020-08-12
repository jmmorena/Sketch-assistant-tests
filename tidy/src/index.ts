import { AssistantConfig, AssistantPackage } from '@sketch-hq/sketch-assistant-types'
import CoreAssistant from '@sketch-hq/sketch-core-assistant'

export const config: AssistantConfig = {
  rules: {
    '@sketch-hq/sketch-core-assistant/layers-subpixel-positioning': {
      active: true,
      scaleFactors: ['16px'],
    },
  },
}

const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: '@sketch-hq/sketch-tidy-assistant',
      rules: [],
      config,
    }
  },
]

export default assistant
