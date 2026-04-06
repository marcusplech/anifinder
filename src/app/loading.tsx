import LoadingSpinner from "@/components/Layout/LoadingSpinner";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
