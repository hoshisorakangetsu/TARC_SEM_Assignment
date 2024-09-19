import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/courses/compare')({
  component: () => <div>Hello /courses/compare!</div>
})