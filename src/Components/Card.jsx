import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste cupiditate aliquam maiores.",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1556382363-8967ad2b37f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Office Amazon",
      description:
        " Ipsum dolor sit amet consectetur adipisicing elit. Iste cupiditate aliquam maiores.",
      instock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "iPhone 11",
      description:
        " Dolor sit amet consectetur adipisicing elit. Iste cupiditate aliquam maiores.",
      instock: true,
    },
  ];
  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, i) => (
        <div key={i} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
          <div className="h-32 bg-zinc-300 w-full">
            <img className="w-full h-full object-cover" src={elem.image} />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-5">{elem.description}</p>
            <button
              className={`px-4 py-1 mt-3 ${
                elem.instock ? "bg-blue-500" : "bg-red-500"
              } text-xs rounded text-zinc-100`}
            >
              {elem.instock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
