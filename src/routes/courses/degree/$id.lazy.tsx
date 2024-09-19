import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/courses/degree/$id')({
  component: () => <div>Hello /diploma/$id!</div>
})