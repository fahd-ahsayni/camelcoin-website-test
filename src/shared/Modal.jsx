import { Button } from "@material-tailwind/react";

export default function Modal() {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal bg-black/20">
        <div className="modal-box relative bg-gray-50 dark:bg-primary-dark-light">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="flex flex-col px-12 items-center justify-center space-y-4">
            <Button variant="gradient" color="orange" className="btn-block">
              Buy Camelcoin on XT.com
            </Button>
            <Button variant="gradient" color="blue" className="btn-block">
              Buy Now on cameleader
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
