import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/room/')({
  component: () => <div>Hello /room/!</div>
})