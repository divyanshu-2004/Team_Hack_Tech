
const Filter = () => {
  return (
    <div>
      <div className="p-6 bg-white rounded-lg shadow-md w-64">
      <h2 className="text-xl font-bold mb-6">Filters</h2>

      {/* Industry Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Industry</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">Technology</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">Healthcare</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">Finance</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">Manufacturing</span>
          </label>
        </div>
      </div>

      {/* Location Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Location</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">North America</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">Europe</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">Asia Pacific</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">Other</span>
          </label>
        </div>
      </div>

      {/* Company Size Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Company Size</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">1-50 employees</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">51-200 employees</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">201-1000 employees</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-700">1000+ employees</span>
          </label>
        </div>
      </div>

      {/* Apply Filters Button */}
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
        Apply Filters
      </button>

      {/* Footer */}
      <p className="mt-6 text-sm text-gray-500">Designed by [Your Name]</p>
    </div>
    </div>
  )
}

export default Filter
