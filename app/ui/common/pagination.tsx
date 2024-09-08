export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number 
  totalPages: number
  onPageChange: (page: number) => void
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
  return (
    <div className="flex flex-wrap justify-center mt-4 gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="py-2 px-4 bg-gray-200 rounded disabled:opacity-50 transition-colors duration-300 hover:bg-gray-300"
      >
        Previous
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`py-2 px-4 rounded transition-colors duration-300 ${
            currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="py-2 px-4 bg-gray-200 rounded disabled:opacity-50 transition-colors duration-300 hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  )
}