import React from "react"
import "./App.css"

const App = () => {
    return(
        <div className = "app-container">
            <form className="note-form">
                <input placeholder="title" required></input>
                <textarea placeholder="Content" rows={10} required></textarea>
                <button >Add Note</button>
            </form>
            <div className="notes-grid">
                <div className="notes-header">
                    <button>x</button>
                </div>
            </div>
        </div>
    )
}