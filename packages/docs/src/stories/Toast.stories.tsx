import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps, ToastProvider } from '@lucasjohann-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Example Title',
    description: 'Example Description',
  },
  decorators: [
    (Story) => {
      return <ToastProvider>{Story()}</ToastProvider>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
