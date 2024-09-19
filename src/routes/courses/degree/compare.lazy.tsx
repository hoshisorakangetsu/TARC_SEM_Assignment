import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/courses/degree/compare')({
  component: DegreeCompare
})

function DegreeCompare() {

}