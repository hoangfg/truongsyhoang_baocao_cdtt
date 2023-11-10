import React from "react";

function Paginate({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    // <nav className="flex justify-center mt-4">
    //   <ul className="flex space-x-2">
    //     {pageNumbers.map((number) => (
    //       <li key={number}>
    //         <button
    //           className={`${
    //             currentPage === number
    //               ? "bg-blue-500 text-white"
    //               : "bg-gray-200 text-gray-700"
    //           } px-4 py-2 rounded`}
    //           onClick={() => onPageChange(number)}
    //         >
    //           {number}
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    <ul class="flex list-reset border border-grey-light rounded w-auto font-sans">
      <li>
        <a
          class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
          href="#"
        >
          Previous
        </a>
      </li>
      <li>
        <a
          class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
          href="#"
        >
          1
        </a>
      </li>
      <li>
        <a
          class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
          href="#"
        >
          2
        </a>
      </li>
      <li>
        <a
          class="block text-white bg-blue border-r border-blue px-3 py-2"
          href="#"
        >
          3
        </a>
      </li>
      <li>
        <a
          class="block hover:text-white hover:bg-blue text-blue px-3 py-2"
          href="#"
        >
          Next
        </a>
      </li>
    </ul>
  );
}

export default Paginate;
