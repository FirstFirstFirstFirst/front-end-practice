import React, { useState } from 'react';

function UrlForm() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: any) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!url) {
      setError('Please add a link');
      console.log(error);
    } else if (!/^https:\/\/.*/.test(url)) {
      setError('Please correct your URL');
      console.log(error);
    } else {
      // Handle valid form submission
      console.log('Submitted URL:', url);
      setUrl('');
      setError('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="url" className="block text-gray-700 font-bold mb-2">
            URL
          </label>
          <input
            type="text"
            id="url"
            name="url"
            value={url}
            onChange={handleInputChange}
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              error ? 'border-red-500' : ''
            }`}
            placeholder="https://example.com"
            minLength={10}
            pattern="https://.*"
            required
          />
          {error && (
            <p className="text-red-500 text-xs italic mt-2">{error}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UrlForm;
