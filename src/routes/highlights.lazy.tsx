import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/highlights')({
  component: () => <div>Hello /highlights!</div>
})