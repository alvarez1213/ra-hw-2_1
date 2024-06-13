import React, { Component } from "react";

import { Toolbar } from "../Toolbar";
import { ProjectList } from "../ProjectList";

import styles from "./portfolio.module.css";

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
    };

    this.products = this.props.products;
  }

  handleSelectFilter = (filter) => {
    const sortFilter = filter.target.textContent;
    if (sortFilter === "All") {
      this.setState({
        products: this.products,
      });
    } else {
      this.setState({
        products: this.products.filter((prod) => prod.category === sortFilter),
      });
    }
  };

  render() {
    return (
      <div className={styles["portfolio"]}>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected="All"
          onSelectFilter={this.handleSelectFilter}
        />

        <ProjectList products={this.state.products} />
      </div>
    );
  }
}
