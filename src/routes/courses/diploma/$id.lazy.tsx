import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/courses/diploma/$id')({
  component: () => <div>Hello /diploma/$id!</div>
})