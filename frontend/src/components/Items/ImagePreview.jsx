export default function ImagePreview({ src }) {
  if (!src) return null;

  return (
    <img
      src={src}
      alt="Item preview"
      className="w-12 h-12 object-cover rounded-md border border-gray-300"
    />
  );
}
