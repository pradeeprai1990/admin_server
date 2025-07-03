import React, { useEffect } from 'react'
import 'dropify/dist/css/dropify.min.css';
import 'dropify/dist/js/dropify.min.js';
import $ from 'jquery';
export default function Dropify() {
    useEffect(() => {
        // Initialize Dropify with custom placeholder text
        $(".dropify").dropify({
            messages: {
                default: "Drag and drop", // Custom placeholder-like text
                error: "Oops, something went wrong",
                remove: "Remove"
            }
        });
    }, []);
    return (
        <div>
            <input
                name="file1"
                type="file"
                className="dropify"
                data-height="250"
                
            />
        </div>
    )
}
