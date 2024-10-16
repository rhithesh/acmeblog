import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import md from "./md.jpg";
import Image from "next/image";
export default function BlogLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 flex justify-center md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Acme Blog
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover insightful articles, expert opinions, and the latest
                  trends in technology and beyond.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                  Subscribe to our newsletter. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Featured Posts
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="group relative rounded-lg overflow-hidden bg-white dark:bg-gray-950 shadow-lg">
                <Link href={`/blog/${"cm27p7p8c0004nnrlu8nabo5t"}`}>
                  <Image
                    src={md}
                    alt="Blog post thumbnail"
                    className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105"
                    width={400}
                    height={300}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      deednendjde
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      edknedkndeknd
                    </p>
                  </div>
                </Link>
              </div>
              <div className="group relative rounded-lg overflow-hidden bg-white dark:bg-gray-950 shadow-lg">
                <Link href={`/blog/${"cm28u3a4t0005nnrlqpaai52d"}`}>
                  <Image
                    src={md}
                    alt="Blog post thumbnail"
                    className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105"
                    width={400}
                    height={300}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      My life in a nut shell
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Heloo everyone this is Hithesh.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="group relative rounded-lg overflow-hidden bg-white dark:bg-gray-950 shadow-lg">
                <Link href={`/blog/${"cm28zzg7v0000olmd6gzzrn20"}`}>
                  <Image
                    src={md}
                    alt="Blog post thumbnail"
                    className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105"
                    width={400}
                    height={300}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      How to master web development
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Web development the most in-demand skills today.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/blogs">View All Posts</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Blog. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
