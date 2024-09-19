import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/courses/diploma/compare')({
  component: () => <div>Hello /courses/compare!</div>
})