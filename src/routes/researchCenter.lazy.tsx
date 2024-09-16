import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/researchCenter')({
  component: () => <div>Hello /researchCenter!</div>
})