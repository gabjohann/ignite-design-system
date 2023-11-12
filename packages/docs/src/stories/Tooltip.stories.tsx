import type { StoryObj, Meta } from '@storybook/react'
import {
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@lucasjohann-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    trigger: (
      <p
        style={{
          width: '180px',
          padding: '1rem 0.5rem',
          marginTop: '2.5rem',

          color: 'white',
          borderRadius: '5px',
          border: '1px solid #7C7C8A',
        }}
      >
        Hover here
      </p>
    ),
    content: 'Example content',
  },
  decorators: [
    (Story) => {
      return <TooltipProvider>{Story()}</TooltipProvider>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
