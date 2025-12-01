import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="p-2">
      <h3>Welcome to Flash X Trading!</h3>
      <p>Navigate to a trading pair to start trading.</p>
    </div>
  ),
})