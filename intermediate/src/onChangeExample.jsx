/*
    onChange() event handler
    event handler used primarily with form elements
    ex: <input>, <textarea>, <select>, <radio>
    Triggers a function every time the value of element changes
*/

import React, {useState} from 'react'

export default function OnChangeExample() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handleNameChange = (event) => setName(event.target.value);
    const handleQtyChange = (event) => setQuantity(event.target.value);
    const handleCommentChange = (e) => setComment(e.target.value);
    const handlePaymentChange = (e) => setPayment(e.target.value);
    const handleShippingChange = (e) => setShipping(e.target.value);

    return (
        <div>
            {/* TEXT INPUT */}
            <input 
                value={name} 
                onChange={handleNameChange} 
            />
            <p>Name: {name}</p>
            
            {/* NUMERICAL INPUT */}
            <input 
                type="number" 
                value={quantity} 
                onChange={handleQtyChange} 
            />
            <p>Quantity: {quantity}</p>
            
            {/* TEXT-AREA INPUT */}
            <textarea
                rows={2}
                cols={20}
                placeholder="delivery instructions" 
                value={comment} 
                onChange={handleCommentChange} 
            />
            <p>Comment: {comment}</p>

            {/* SELECT INPUT */}
            <select 
                value={payment}
                onChange={handlePaymentChange}
            >
                <option value="" disabled>Select payment option</option>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="upi">UPI</option>
            </select>
            <p>Payment: {payment} </p>

            {/* RADIO INPUT */}
            <label>
                <input type="radio" value="pickup"
                    checked={shipping === "pickup"}
                    onChange={handleShippingChange}
                />
                Pickup
            </label><br/>
            <label>
                <input type="radio" value="delivery"
                    checked={shipping === "delivery"}
                    onChange={handleShippingChange}
                />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}
