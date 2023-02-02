import React from "react";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";
const Home = () => {
    return <div>
        <Slider></Slider>
        <Categories></Categories>
        <Products></Products>
    </div>
};
export default Home;