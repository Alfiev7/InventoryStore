export default function OrderInfo({ order }) {
    return (
      <div className="grid grid-cols-2 gap-6 text-gray-700 font-semibold">
        <div>
          <p className="">Name:</p>
          <p className="text-lg text-purple-700">{order.name}</p>
        </div>
        <div>
          <p className="">Total Amount:</p>
          <p className="text-lg text-purple-700">${order.totalAmount}</p>
        </div>
        <div>
          <p className="">Number of Items:</p>
          <p className="text-lg text-purple-700">{order.items.length}</p>
        </div>
        <div>
          <p className="">Date:</p>
          <p className="text-lg text-purple-700">{order.date}</p>
        </div>
        <div>
          <p className="">Address:</p>
          <p className="text-lg text-purple-700">{order.address}</p>
        </div>
        <div>
          <p className="">City:</p>
          <p className="text-lg text-purple-700">{order.city}</p>
        </div>
        <div>
          <p className="">Phone Number:</p>
          <p className="text-lg text-purple-700">{order.phone}</p>
        </div>
        <div>
          <p className="">Country:</p>
          <p className="text-lg text-purple-700">{order.country}</p>
        </div>
      </div>
    );
  }
  