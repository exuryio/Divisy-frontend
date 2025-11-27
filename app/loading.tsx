export default function Loading() {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

