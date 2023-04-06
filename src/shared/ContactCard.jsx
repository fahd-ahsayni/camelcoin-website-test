import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function ContactCard() {
  return (
    <Card className="w-96 bg-gray-50 dark:bg-primary-dark-light shadow-xl">
      <CardHeader
        variant="gradient"
        color="brown"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Get in Touch
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Mobile"
          className="input input-bordered w-full"
        />
        <textarea
          placeholder="Message"
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>
      </CardBody>
      <CardFooter className="pt-0">
        <button
          className="btn-block inline-block font-semibold rounded cursor-pointer bg-camel-600 px-6 pt-2.5 pb-2 text-xs uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-camel-700 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-camel-700 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]"
          fullWidth
        >
          Contact
        </button>
      </CardFooter>
    </Card>
  );
}
