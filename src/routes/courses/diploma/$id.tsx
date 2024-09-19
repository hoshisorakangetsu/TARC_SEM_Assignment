import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/courses/diploma/$id')({
  component: () => <div>Hello /diploma/$id!</div>
})