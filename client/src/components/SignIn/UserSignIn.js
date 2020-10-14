import React from "react";
import AuthenticationButton from "../Buttons/Authenticated-Button"
import SignupButton from "../Buttons/SignUpButton";

function UserSignIn() {
    return (
        <div className="text-gray-700 text-center bg-gray-400 p-2">
            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                    Username
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="username"
                        type="text"
                        placeholder="Username"
                    />
                </label>
            </div>
            <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                    Password
                    <input
                        className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                        id="password"
                        type="password"
                        placeholder="******************"
                    />
                </label>

                <p className="text-red text-xs italic">
                    Please choose a password.
                </p>
            </div>
            <div className="flex items-center justify-between">
                <AuthenticationButton />
                <SignupButton />
                <a
                    className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                    href="/"
                >
                    Forgot Password?
                </a>
            </div>
        </div>
    );
}

export default UserSignIn;
