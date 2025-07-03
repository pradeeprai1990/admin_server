import React, { useState } from 'react';
import axios from 'axios';

const SubSubcategoryForm = () => {
    const [formData, setFormData] = useState({
        subSubcategoryName: '',
        parentCategory: '',
        subCategory: '',
        subSubcategoryImage: '',
        subSubcategoryOrder: '',
        subSubcategoryStatus: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/subsubcategories', formData);
            console.log('Sub-subcategory created:', response.data);
            // Reset form or handle success
        } catch (error) {
            console.error('Error creating sub-subcategory:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Sub-subcategory Name</label>
                <input
                    type="text"
                    name="subSubcategoryName"
                    value={formData.subSubcategoryName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    minLength="2"
                    maxLength="20"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Parent Category</label>
                <input
                    type="text"
                    name="parentCategory"
                    value={formData.parentCategory}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Sub Category</label>
                <input
                    type="text"
                    name="subCategory"
                    value={formData.subCategory}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Sub-subcategory Image</label>
                <input
                    type="text"
                    name="subSubcategoryImage"
                    value={formData.subSubcategoryImage}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Order</label>
                <input
                    type="number"
                    name="subSubcategoryOrder"
                    value={formData.subSubcategoryOrder}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        name="subSubcategoryStatus"
                        checked={formData.subSubcategoryStatus}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <span className="text-gray-700">Status</span>
                </label>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Create Sub-subcategory
            </button>
        </form>
    );
};

export default SubSubcategoryForm; 