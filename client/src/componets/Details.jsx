import React from "react";

export default function Details() {
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-bold mb-6">User Details Page</h1>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-gray-400 px-4 py-2">Sr No</th>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Number</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Message</th>
              <th className="border border-gray-400 px-4 py-2">Edit</th>
              <th className="border border-gray-400 px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td className="border border-gray-400 px-4 py-2 text-center">1</td>
              <td className="border border-gray-400 px-4 py-2">John Doe</td>
              <td className="border border-gray-400 px-4 py-2">1234567890</td>
              <td className="border border-gray-400 px-4 py-2">john@example.com</td>
              <td className="border border-gray-400 px-4 py-2">Hello!</td>
              <td className="border border-gray-400 px-4 py-2 text-blue-500 cursor-pointer">✏️</td>
              <td className="border border-gray-400 px-4 py-2 text-red-500 cursor-pointer">🗑</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
