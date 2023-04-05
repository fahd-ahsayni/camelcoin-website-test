export default function Modal({ idModel, children }) {
  return (
    <>
      <input type="checkbox" id={idModel} className="modal-toggle" />
      <div className="modal bg-black/20">
        <div className="modal-box p-0 m-0 relative ring-blue-gray-50 ring bg-blue-gray-50 dark:bg-primary-dark-light">
          <label
            htmlFor={idModel}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-[999]"
          >
            ✕
          </label>

          {children}
        </div>
      </div>
    </>
  );
}
