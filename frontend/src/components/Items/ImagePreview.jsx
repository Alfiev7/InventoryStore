export default function ImagePreview({ src }) {
    if (!src) return null;
  
    return (
      <div className="flex overflow-x-auto gap-4">
        <img
          src={src}
          alt="Item preview"
          className="h-32 rounded shadow object-cover"
        />
      </div>
    );
  }
  