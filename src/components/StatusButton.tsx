"use client";
import { useFormStatus } from "react-dom";

const StatusButton = () => {
  const status = useFormStatus();
  return (
    <button
      className={`${
        status.pending ? "bg-gray-400" : "bg-yellow-400"
      } self-start rounded-md px-2 py-1 text-black`}
      type="submit"
      disabled={status.pending}
    >
      {status.pending ? "Creating..." : "Create Post"}
    </button>
  );
};

export default StatusButton;
