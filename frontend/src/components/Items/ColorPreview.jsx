export default function ColorPreview({ colors }) {
    return (
      <div className="flex gap-4">
        {colors.map((color, i) => (
          <div
            key={i}
            className="w-6 h-6 rounded border shadow"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    );
  }
  