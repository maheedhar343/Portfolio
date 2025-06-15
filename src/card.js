import { motion } from 'framer-motion'; // Optional for animations

const Card = ({ img, subName, description, navigate }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
      whileHover={{ y: -4, scale: 1.02 }}
      role="article"
      aria-labelledby={`card-title-${subName.replace(/\s+/g, '-')}`}
    >
      <a
        href={navigate}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
        aria-label={`View ${subName} project on GitHub`}
      >
        <img
          src={img}
          alt={`${subName} project preview`}
          className="w-full h-48 object-cover rounded-t-xl"
          loading="lazy"
        />
        <div className="p-6">
          <h3
            id={`card-title-${subName.replace(/\s+/g, '-')}`}
            className="text-xl font-semibold text-gray-800 mb-2 dark:text-white"
          >
            {subName}
          </h3>
          <p className="text-gray-600 text-sm mb-4 dark:text-gray-300 line-clamp-3">
            {description}
          </p>
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400">
            View Project
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </a>
    </motion.div>
  );
};

export default Card;