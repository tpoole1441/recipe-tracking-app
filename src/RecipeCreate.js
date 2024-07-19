import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name"
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  type="cuisine"
                  id="cuisine"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  type="url"
                  id="photo"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                  placeholder="URL"
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  type="text"
                  id="ingredients"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  placeholder="Ingredients"
                  rows={2}
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  type="text"
                  id="preparation"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  placeholder="Preparation"
                  rows={2}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
