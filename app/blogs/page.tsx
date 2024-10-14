"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

// Mock data for blog posts

export default function BlogSelection() {
  useEffect(() => {
    document.title = "Blog Selection | Next.js Blog";
    async function fetchData() {
      const data = await fetch("/api/all");
      const posts = await data.json();
      setblogpost(posts);
    }
    fetchData();
  }, []);

  const [blogpost, setblogpost] = useState([]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Choose a Blog to Read</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogpost.map((post) => (
          <Card
            key={post.id}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle>{post?.title}</CardTitle>
              <CardDescription>{post?.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={`/blog/${post?.id}`}
                className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200"
              >
                Read More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}