const Card = ({ source, publishedAt, title, description, author, image }) => {
  return (
    <div className="max-w-md  rounded-lg   shadow-md bg-gray-800">
      <img
        src={image}
        alt=""
        className="rounded-t-lg w-full object-cover h-56"
        width="200px"
        height="200px"
      />

      <div className="p-5">
        <div className="flex justify-between pt-2 pb-4 text-slate-200 text-xs">
          <p>{source}</p>
          <p>{publishedAt}</p>
        </div>
        <h5 className="mb-2 text-lg font-bold tracking-tight  text-white">
          {title}
        </h5>
        <p className="mb-5 text-sm text-gray-200">{description}</p>
        <a
          href="/"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
