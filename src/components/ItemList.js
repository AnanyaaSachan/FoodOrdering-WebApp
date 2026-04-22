const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-start py-4 border-b last:border-none"
        >
          
          <div className="w-9/12">
            <h3 className="font-semibold text-gray-800 text-md">
              {item.name}
            </h3>

            <p className="text-green-600 font-medium">
              ₹{item.price / 100}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {item.description}
            </p>
          </div>

          {/* RIGHT SIDE (image placeholder optional) */}
          <div className="w-3/12 flex justify-end"> 
           
            <div className="relative">
                 <img
                   src={item.imageId}
                   alt="food"
                   className="w-20 h-20 object-cover rounded-lg"
                />

               <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-green-600 border border-gray-300 px-3 py-[2px] rounded-md text-xs font-bold shadow hover:bg-gray-100 transition">
                 + Add
               </button>
            </div>
         </div>

        </div>
      ))}
    </div>
  );
};


export default ItemList;