import { createPostAction } from "@/actions";
import StatusButton from "@/components/StatusButton";
import React from "react";

export default function CreatePostPage() {
  return (
    <div className="h-screen bg-blue-950 grid place-items-center text-white">
      <div className="w-1/2">
        <h1 className="mb-4 text-3xl font-bold text-yellow-400">
          Create a new post
        </h1>
        <form action={createPostAction} className="flex flex-col gap-3 w-full">
          <div className="w-full">
            <label htmlFor="">Title</label>
            <input
              className="w-full rounded-md outline-none py-1 px-2 text-black"
              type="text"
              name="title"
              placeholder="Title of the post"
            />
          </div>
          <div className="w-full">
            <label htmlFor="">Body</label>
            <textarea
              className="w-full h-32 resize-none rounded-md py-1 px-2 outline-none text-black"
              name="body"
              placeholder="Body of the post"
            />
          </div>
          <StatusButton />
        </form>
      </div>
    </div>
  );
}
