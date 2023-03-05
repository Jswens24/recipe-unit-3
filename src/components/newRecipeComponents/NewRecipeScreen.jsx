import { Formik } from "formik";
import React from "react";

const NewRecipeScreen = () => {

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  }

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit} >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input placeholder="recipe name" />
            <input placeholder="recipe image" />
            <input placeholder="recipe prep time" />
            <input placeholder="recipe cook time" />
            <input placeholder="recipe serves" />
            <input placeholder="recipe ingredient" />
            <input placeholder="recipe quantity" />
            <textarea placeholder="instructions" />
            <div>
              <input type="radio" id="cook" name="cook" value="cook" />
              <label for="cook">Cook</label>
              <input type="radio" id="bake" name="bake" value="bake" />
              <label for="bake">Bake</label>
              <input type="radio" id="drink" name="drink" value="drink" />
              <label for="drink">Drink</label>
            </div>
          </form>
        )}
        <Formik />
    </section>
  );
};

export default NewRecipeScreen;
