"use client";
import * as actions from "@/actions";
import { startTransition } from "react";

const DeletePostButton = ({ id }: { id: string }) => {
  return (
    <button
      className="bg-red-500 text-black mt-4 px-4 py-1 rounded-md"
      onClick={() => {
        startTransition(async () => {
          await actions.deletePostAction(id);
        });
      }}
    >
      DeletePostButton
    </button>
  );
};

export default DeletePostButton;
