import React from "react";
import Popper from "popper.js";

const Popover = () => {
    const [popoverShow, setPopoverShow] = React.useState(false);
    const btnRef = React.createRef();
    const popoverRef = React.createRef();
    const openPopover = () => {
        new Popper(btnRef.current, popoverRef.current, {
            placement: "top",
        });
        setPopoverShow(true);
    };
    const closePopover = () => {
        setPopoverShow(false);
    };
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full text-center">
                    <button
                        className={
                            "bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded text-white font-bold shadow sm:shadow-md"
                        }
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => {
                            popoverShow ? closePopover() : openPopover();
                        }}
                        ref={btnRef}
                    >
                        Save
                    </button>
                    <div
                        className={
                            (popoverShow ? "" : "hidden ") +
                            "bg-gray-600 bg-opacity-75 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
                        }
                        ref={popoverRef}
                    >
                        <div>
                            <div
                                className={
                                    "text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg text-center"
                                }
                            >
                                PLEASE LOGIN OR SIGN UP
                            </div>
                            <div className="text-white p-3">
                                <p>You must own an account to save your code!
                                Enjoy your personalized CodeLocker by
                                Logging In or Signing Up for a free account below.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popover;
