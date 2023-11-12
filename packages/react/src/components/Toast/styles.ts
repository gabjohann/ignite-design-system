import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastRoot = styled(Toast.Root, {
  width: '22.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  padding: '$3 $5',

  borderRadius: '$sm',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  fontFamily: '$default',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$regular',
  fontFamily: '$default',
})

export const ToastClose = styled(Toast.Close, {
  color: '$gray200',

  '&:hover': {
    color: '$gray100',
    cursor: 'pointer',
  },
})

export const ToastView = styled(Toast.Viewport, {})
