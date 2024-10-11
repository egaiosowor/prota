import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-screen grid items-center justify-center' >
      <div className="px-4 md:px-6 text-center space-y-5">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Welcome to our Platform
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The all-in-one platform for building, deploying, and managing modern
            web apps.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-black px-8 text-white text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="/signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
