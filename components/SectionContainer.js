export default function SectionContainer({ children }) {
  return (
    <div className="mx-auto h-screen max-w-3xl flex-col px-4 sm:px-6 xl:max-w-full xl:px-2">
      {children}
    </div>
  )
}
