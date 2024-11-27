const Announcements = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <div className="rounded-md bg-[#e1f8ff] p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-800">
              Lorem ipsum dolor sit.
            </h2>
            <span className="rounded-lg bg-white px-[6px] py-[2px] text-xs text-gray-400">
              2024-12-14
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="rounded-md bg-purpleL p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-800">
              Lorem ipsum dolor sit.
            </h2>
            <span className="rounded-lg bg-white px-[6px] py-[2px] text-xs text-gray-400">
              2024-12-14
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="rounded-md bg-pinkL p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-800">
              Lorem ipsum dolor sit.
            </h2>
            <span className="rounded-lg bg-white px-[6px] py-[2px] text-xs text-gray-400">
              2024-12-14
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
