export default function Divider({ line }: { line?: boolean }) {
  return (
    <div className={`h-20 ${line ? 'shadow dark:border-b border-gray-800 border-dashed' : ''}`} />
  )
}
