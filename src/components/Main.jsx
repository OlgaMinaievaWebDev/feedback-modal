function Main() {
  const [feedback, setFeedback] = useState(false);

  return (
    <div className="bg-purple-100 text-stone-900 p-4 h-screen flex flex-col justify-center items-center gap-2">
      <p className="text-2xl ">Please give us your feedback</p>
      <button
        className="bg-purple-600 text-stone-100 rounded py-2 px-4 text-"
        onClick={() => alert("Thank you for your feedback!")}
      >
        Feedback
      </button>
    </div>
  );
}

export default Main;
