import DeletePostButton from "@/components/DeletePostButton";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

export default async function HomePage() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  return (
    <div className="h-screen bg-blue-900 text-white p-8">
      <div className="mb-4 text-right">
        <Link href="/new" className="bg-green-400 px-4 py-2 rounded-md">
          Create a new post
        </Link>
      </div>
      <div className="w-full grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-500 flex flex-col items-center justify-center h-32"
          >
            <div>
              <h1 className="text-blue-950 font-bold">{post.title}</h1>
              <p>{post.body}</p>
              <small>
                {post.author.name} -{" "}
                {post.author.createdAt.toLocaleString("es-GT")}
              </small>
            </div>
            <DeletePostButton id={post.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
