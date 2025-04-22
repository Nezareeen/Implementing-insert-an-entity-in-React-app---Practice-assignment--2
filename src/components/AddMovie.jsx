// src/components/AddMovie.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovie.css';

const AddMovie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [posterUrl, setPosterUrl] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'director':
        setDirector(value);
        break;
      case 'genre':
        setGenre(value);
        break;
      case 'releaseYear':
        setReleaseYear(value);
        break;
      case 'synopsis':
        setSynopsis(value);
        break;
      case 'posterUrl':
        setPosterUrl(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, director, genre, releaseYear, synopsis, posterUrl });
    alert('Movie added (hypothetically)!');
    navigate('/'); 
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="add-movie-form">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            id="director"
            name="director"
            value={director}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <select
            id="genre"
            name="genre"
            value={genre}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            {/* Add more genres as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="releaseYear">Release Year:</label>
          <input
            type="number"
            id="releaseYear"
            name="releaseYear"
            value={releaseYear}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="synopsis">Synopsis:</label>
          <textarea
            id="synopsis"
            name="synopsis"
            value={synopsis}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="posterUrl">Poster Image URL:</label>
          <input
            type="url"
            id="posterUrl"
            name="posterUrl"
            value={posterUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;