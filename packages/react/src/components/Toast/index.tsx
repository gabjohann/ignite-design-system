import * as RadixToast from '@radix-ui/react-toast'
import { ComponentProps, ReactNode } from 'react'
import { X } from '@phosphor-icons/react'
import { Text } from '../Text'
import { Heading } from '../Heading'
import {
  Header,
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastView,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <>
      <ToastRoot {...props} open>
        <Header>
          <ToastTitle asChild>
            <Heading>{title}</Heading>
          </ToastTitle>
          <ToastClose asChild>
            <X size={20} weight="bold" />
          </ToastClose>
        </Header>
        <ToastDescription asChild>
          <Text size={'md'}>{description}</Text>
        </ToastDescription>
      </ToastRoot>
      <ToastView />
    </>
  )
}

export function ToastProvider({ children }: { children: ReactNode }) {
  return <RadixToast.Provider>{children}</RadixToast.Provider>
}
