import React, { useState, useEffect } from "react";
import Layout from '../../marketplace/components/layout/Layout';
import { isAuthenticated } from "../actions";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./ApiAdmin";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const destroy = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <Layout
            title="Manage Products"
            description="Perform CRUD on products"
        >
            <div className="row">
                <div>
                    <h2>
                        Total {products.length} products
                    </h2>
                    <hr />
                    <ul>
                        {products.map((p, i) => (
                            <li
                                key={i}
                            >
                                <strong>{p.name}</strong>
                                <Link to={`/admin/product/update/${p._id}`}>
                                    <span>
                                        Update
                                    </span>
                                </Link>
                                <span
                                    onClick={() => destroy(p._id)}
                                >
                                    Delete
                                </span>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            </div>
        </Layout>
    );
};

export default ManageProducts;