
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("manjvwvb");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="bg-black w-2/3 p-6 rounded-lg shadow-lg flex-col items-center justify-center text-white">

            <header className="text-center mb-4">
                <h1 className="text-2xl font-bold text-white">Send Us An Email</h1>
                <p className="text-sm text-gray-400">Let us know what we can do for you! </p>
            </header>
            <div className="flex items-center justify-center mb-4">
                <form
                    className="bg-white text-black rounded-lg p-4 space-y-4 w-full max-w-md flex flex-col items-center"
                    onSubmit={handleSubmit}>
                    <p className="text-center text-bold ">
                        Email:
                    </p>
                    <label htmlFor="email" className="text-center text-bold ">

                    </label>
                    <input className="border outline-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg w-2/3 p-2 mb-4"
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <p className="text-center text-bold ">
                        Message:
                    </p>

                    <textarea className="border outline-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg w-2/3 p-2 mb-4"
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <button type="submit" disabled={state.submitting} className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}


export default ContactForm;




// <form className="bg-white text-black rounded-lg p-4 space-y-4 ">
//     <p className="text-center text-bold "> Email: </p>
//     <input className="border outline-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg" type="text" />
//     <p className="text-center text-bold "> Name: </p>
//     <input className="border outline-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg" type="text" />
// </form>
