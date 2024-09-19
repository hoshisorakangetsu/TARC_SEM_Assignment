import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/courses/degree/$id')({
  component: () => <div>Hello /diploma/$id!</div>
})