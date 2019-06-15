import React, { Component } from "react";
import axios from "axios";

// Crear el context
const CategoriesContex = React.createContext();
export const CategoriesConsumer = CategoriesContex.Consumer;

class CategoriesProvider extends Component {
  token = "VSZZMI42XXH2HFIS6FET";
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${
      this.token
    }&locale=es-ES`;
    let categories = await axios.get(url);
    this.setState({
      categories: categories.data.categories
    });
  };

  render() {
    return (
      <CategoriesContex.Provider
        value={{
          categories: this.state.categories
        }}
      >
        {this.props.children}
      </CategoriesContex.Provider>
    );
  }
}

export default CategoriesProvider;
