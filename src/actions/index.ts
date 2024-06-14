"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPostAction(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  let me = await prisma.user.findUnique({
    where: {
      email: "julio.sanic.gt.256@gmail.com",
    },
  });

  if (!me) {
    me = await prisma.user.create({
      data: {
        email: "julio.sanic.gt.256@gmail.com",
        name: "Julio Sanic",
      },
    });
  }

  await prisma.post.create({
    data: {
      title,
      body,
      authorId: me.id,
      slug: title.toLowerCase().replace(/ /g, "-"),
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function deletePostAction(id: string) {
  await prisma.post.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
}
