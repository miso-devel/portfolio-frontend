import profileImage from "../../assets/images/dottt.png";
import twitter from "../../assets/images/twitter.png";
import github from "../../assets/images/github.png";
export const ImageLink = () => {
  return (
    <div className="text-center flex justify-center items-center p-10">
      <div>
        <div className="grid grid-cols-6">
          <p className="text-left text-4xl font-extrabold col-span-4 py-3">
            done
          </p>
          <a
            href="https://twitter.com/donennnn"
            className=" text-center justify-center items-center flex"
          >
            <img src={twitter} alt="" className="w-10" />
          </a>

          <a
            href="https://github.com/nisi0929"
            className=" text-center justify-center items-center flex"
          >
            <img src={github} alt="" className="w-10" />
          </a>
        </div>

        <img src={profileImage} alt="" className=" rounded-2xl" />
      </div>
    </div>
  );
};
