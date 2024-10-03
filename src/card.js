function Card({ img, subName, description, navigate }) {
    return (
      <div className="max-w-sm m-1 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 ml-9">
        <a href={navigate}>
          <img className="rounded-t-lg" src={img} alt="img" />
        </a>
        <div className="p-5">
          <a href={navigate}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{subName}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <a
            href={navigate}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
  
  export default Card;
  
  