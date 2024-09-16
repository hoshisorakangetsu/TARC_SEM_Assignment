import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/achievements')({
  component: () => <div>Hello /achievements!</div>
})