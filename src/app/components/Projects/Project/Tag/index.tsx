export function Tag({ tag }: { tag: string }) {
  return (
    <span className="px-3 py-1 rounded-md text-gray-200 bg-slate-600 text-base max-[420px]:text-base">
      {tag}
    </span>
  );
}
