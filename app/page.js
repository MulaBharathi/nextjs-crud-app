export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">My CRUD App</h1>

      {/* Form to create a new item */}
      <form className="my-4">
        <input
          type="text"
          placeholder="Enter item"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add
        </button>
      </form>

      {/* List of items */}
      <ul>
        <li>Sample Item 1</li>
        <li>Sample Item 2</li>
      </ul>
    </main>
  );
}
