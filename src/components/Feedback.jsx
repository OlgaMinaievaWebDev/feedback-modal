import { forwardRef, useState } from "react";

const Feedback = forwardRef((props, ref) => {
  const [selectedRating, setSelectedRating] = useState(null);

  function handleSelectRating(rating) {
    setSelectedRating(rating);
  }

  function handleSubmitRating(e) {
    e.preventDefault(); // Prevent page reload on form submission
    if (selectedRating === null) {
      return window.alert("Please select a rating first!");
    } else {
      window.alert(`You have submitted the rating: ${selectedRating}`);
      setTimeout(() => {
        ref.current?.close();
      }, 1000);
      setSelectedRating(null);
    }
  }

  return (
    <dialog
      ref={ref}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg w-auto max-w-max min-h-[10px]"
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDesc"
      role="dialog"
    >
      <h2
        id="dialogTitle"
        className="text-lg font-semibold mb-4 text-center text-gray-800"
      >
        Could you please rate us?
      </h2>

      {/* Rating Buttons */}
      <div className="flex justify-center space-x-2 mb-4" id="dialogDesc">
        {[...Array(10)].map((_, index) => {
          const rating = index + 1;
          return (
            <button
              key={rating}
              onClick={() => handleSelectRating(rating)}
              className={`px-4 py-2 rounded transition duration-200 ${
                selectedRating === rating
                  ? "bg-yellow-400"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {rating}
            </button>
          );
        })}
      </div>

      {/* Submit & Close Buttons */}
      <div className="flex justify-center gap-4">
        <button
          className="mt-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition duration-200"
          onClick={handleSubmitRating}
          disabled={selectedRating === null}
        >
          Submit
        </button>
        <button
          onClick={() => ref.current?.close()}
          className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200"
        >
          Close
        </button>
      </div>
    </dialog>
  );
});

// ✅ Add display name to avoid warnings in React DevTools
Feedback.displayName = "Feedback";

export default Feedback;
