export default function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[350px] shadow space-y-5 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{message}</h2>

        <div className="flex justify-center gap-4 pt-2">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-800">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
