import { Link } from "react-router-dom";

export default function CreateEvent() {
  return (
    <div className="w-full">
      <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
        <div className="w-full overflow-hidden bg-white p-8 shadow-sm dark:bg-gray-800 sm:max-w-md sm:rounded-lg">
          <form method="POST">
            <input
              type="hidden"
              name="_token"
              value="GhpGn48rFRsMAQKf8HQEOWZsRb9F8VJQwwAQs6Ck"
            />
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-400">
                {" "}
                Event Name{" "}
              </label>

              <input
                className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full"
                id="event name"
                type="text"
                name="event name"
                placeholder="Event name"
                required="required"
                autofocus="autofocus"
              />
            </div>

            <div className="mt-4">
              <label
                className="block text-sm font-medium text-gray-800 dark:text-gray-400"
                for="host"
              >
                {" "}
                Host Name{" "}
              </label>

              <input
                className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full"
                id="host"
                type="text"
                name="host"
                placeholder="Host Name"
                required="required"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-400">
                {" "}
                Start Date{" "}
              </label>

              <input
                className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full"
                id="start"
                type="date"
                name="start"
                placeholder="Start Date"
                required="required"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-400">
                {" "}
                End Date{" "}
              </label>

              <input
                className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full"
                id="end"
                type="date"
                name="end"
                placeholder="End Date"
                required="required"
              />
            </div>

            <div className="mt-4">
              <label
                className="block text-sm font-medium text-gray-800 dark:text-gray-400"
                for="location"
              >
                {" "}
                Location{" "}
              </label>

              <input
                className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full"
                id="location"
                type="text"
                name="location"
                placeholder="Location"
                required="required"
              />
            </div>

            <div className="mt-4">
              <label
                className="block text-sm font-medium text-gray-800 dark:text-gray-400"
                for="upload"
              >
                {" "}
                Host Name{" "}
              </label>

              <input
                className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full"
                id="upload"
                type="file"
                name="upload"
                placeholder="Event Photo"
                required="required"
              />
            </div>

            <div className="mt-2 flex items-center justify-end">
              <Link to="/event">
                <button className="w-[120px] h-[55px] mt-5 p-[10px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white text-sm font-medium rounded-[10px]">
                  Next
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
