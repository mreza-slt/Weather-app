import classNames from "classnames";

const Modal = ({ setValue, isShow, error, changeLocation, handlerClose }) => {
  return (
    <div
      className={classNames(
        "opacity-0 transition-all ease-linear duration-300 rounded fixed w-full h-[22rem] top-0 left-0 flex  justify-center",
        {
          "opacity-100": isShow,
          "pointer-events-none": !isShow,
        }
      )}
    >
      <div className="absolute w-full h-screen bg-black-900 opacity-50"></div>
      <div className="bg-white mt-6 w-11/12 md:max-w-md mx-auto rounded-[2.25rem] shadow-lg z-50 overflow-y-auto">
        <div className="px-6">
          <h1 className="mt-6 prose-2xl text-center font-semibold">
            Change location
          </h1>

          <div className="rounded py-4 mb-4">
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2 text-xl"
                htmlFor="city"
              >
                {error ? (
                  <span className="text-[red]">City must not be empty</span>
                ) : (
                  "City"
                )}
              </label>
              <input
                id="city"
                onChange={(e) => setValue(e.target.value)}
                className="border border-[#0345af] rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight outline-none focus:border-2 focus:border-[#0345af]"
                type="text"
              />
            </div>
            <button
              onClick={changeLocation}
              className="flex justify-center items-center mb-6 gradiant  outline-none w-full box-border border-0 rounded-[25px] p-[10px] text-white font-bold shadow-[0_0_30px_-5px_rgba(0,0,0,0.25)] transition-all ease-linear duration-200 hover:scale-95"
            >
              <i className="fa-solid fa-location-dot mr-2"></i>

              <span>Change location</span>
            </button>
            <button
              onClick={handlerClose}
              className="modal-open danger outline-none w-full box-border border-0 rounded-[25px] p-[10px] text-white font-bold shadow-[0_0_30px_-5px_rgba(0,0,0,0.25)] transition-all ease-linear duration-200 hover:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
