import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/facilities')({
  component: () => <div>Hello /facilities!</div>
})