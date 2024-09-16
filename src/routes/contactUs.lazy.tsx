import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contactUs')({
  component: () => <div>Hello /contactUs!</div>
})