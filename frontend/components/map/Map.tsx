"use client";

import dynamic from "next/dynamic";

const TransitMap = dynamic(
  () => import("./TransitMap"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: "600px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading map...
      </div>
    ),
  }
);

export default TransitMap;