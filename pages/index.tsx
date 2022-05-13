import React from "react";

import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <button type="button" onClick={() => toast.success("hello toast!")}>
        Toast Me
      </button>
    </div>
  );
}
