import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./leafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[600px] items-center justify-center rounded-xl border bg-gray-100">
      Loading map...
    </div>
  ),
});

export default LeafletMap;