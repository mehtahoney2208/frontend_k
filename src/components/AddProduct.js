import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
    const [product, setProduct] = useState({ name: "", description: "", category: "none" });
    const [filePath, setFilePath] = useState(null);
    const [categories, setCategories] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const categoryAPI = "http://localhost:5000/api/category/getcategory";

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(categoryAPI);
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }
        fetchData();
    }, []);

    function handleChange(e) {
        setProduct(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
    }

    const postProductApi = "http://localhost:5000/api/product/postproduct";

    async function handleSubmit(e) {
        e.preventDefault();
        if (!filePath) {
            setErrorMessage("No file selected");
            return;
        }

        const newFormData = new FormData();
        newFormData.append('name', product.name);
        newFormData.append('category', product.category);
        newFormData.append('description', product.description);
        newFormData.append('image', filePath);

        try {
            const response = await axios.post(postProductApi, newFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccessMessage("Product uploaded successfully");
            setErrorMessage(""); // Clear any previous error messages
        } catch (error) {
            setErrorMessage("Error uploading product: " + error.message);
            setSuccessMessage(""); // Clear any previous success messages
        }
    }

    return (
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-5 m-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                aria-label="name"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                aria-label="description"
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <select
                                name="category"
                                value={product.category}
                                onChange={handleChange}
                            >
                                <option value="none" disabled>---Choose Category---</option>
                                {categories.length > 0 && categories.map((category, index) => (
                                    <option key={index} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group mt-3">
                            <input
                                type="file"
                                className="form-control"
                                placeholder="Image"
                                aria-label="image"
                                onChange={(e) => setFilePath(e.target.files[0])}
                            />
                        </div>
                        <button type="submit" className="btn btn-success mt-3">Submit</button>
                    </form>
                    {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                    {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                </div>
            </div>
        </div>
    );
}