export default function OverviewCard({ data }) {
  return (
    <>
      {data.map((item) => (
        <div className="grid grid-cols-3 gap-10" key={item.id}>
          <div className="bg-pink-50 h-40 w-110 rounded-lg grid grid-cols-2">
            <div>
              <h1 className="font-bold mt-5 ml-5 mb-5 text-2xl">
                {item.turnover.name}
              </h1>
              <h1 className="font-bold text-4xl ml-5 mb-3">
                {item.turnover.cost}
              </h1>
              <p className="text-gray-800 ml-5 text-lg">
                <span className="text-green-500">{item.turnover.change}</span>{" "}
                period of change
              </p>
            </div>

            <div className="">
              <button className="ml-35 mt-5 rounded-lg">
                <img src="/img/Button 1509.png" alt="" />
              </button>
            </div>
          </div>
          <div className="bg-blue-50 h-40 w-110 rounded-lg grid grid-cols-2">
            <div>
              <h1 className="font-bold mt-5 ml-5 mb-5 text-2xl">
                {item.profit.name}
              </h1>
              <h1 className="font-bold text-4xl ml-5 mb-3">
                {item.profit.cost}
              </h1>
              <p className="text-gray-800 ml-5 text-lg">
                <span className="text-green-500">{item.profit.change}</span>{" "}
                period of change
              </p>
            </div>

            <div className="">
              <button className="ml-35 mt-5 rounded-lg">
                <img src="/img/Button 1529.png" alt="" />
              </button>
            </div>
          </div>
          <div className="bg-blue-50 h-40 w-110 rounded-lg grid grid-cols-2">
            <div>
              <h1 className="font-bold mt-5 ml-5 mb-5 text-2xl">
                {item.newCustomer.name}
              </h1>
              <h1 className="font-bold text-4xl ml-5 mb-3">
                {item.newCustomer.quantity}
              </h1>
              <p className="text-gray-800 ml-5 text-lg">
                <span className="text-green-500">
                  {item.newCustomer.change}
                </span>
                period of change
              </p>
            </div>

            <div className="">
              <button className="ml-35 mt-5 rounded-lg">
                <img src="/img/Button 1530.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
