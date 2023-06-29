import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col px-8 pt-24 w-screen h-screen">
      <div className="flex flex-wrap justify-start px-6 ">
        <div className=" h-48 w-48 sm:w-auto bg-gray-200 overflow-hidden mb-4 sm:mb-0 border-2 border-[#f0f0f0]">
          <Image
            className="object-cover w-full h-full"
            width={400}
            height={400}
            src="https://upload.wikimedia.org/wikipedia/id/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt="IMAGE"
          />
        </div>
        <div className="h-full w-48 sm:w-auto flex flex-col items-start px-8 justify-between py-3">
          <div>
            <h2 className="text-2xl font-bold">Account Name</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-2">
            <p className=" font-bold">LOGOUT</p>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-start space-y-4 px-6 mt-4 w-full">
        <div className="flex-auto w-full flex-wrap sm:w-1/2 h-40 bg-gray-200 rounded mb-2 sm:mr-2 sm:mb-0 mr-2">
          <p className="font-bold text-xl ml-2">Investments</p>
        </div>
        <div className=" flex-auto flex-wrap w-full sm:w-1/2 h-40 bg-gray-200 rounded mb-2 sm:mr-2 sm:mb-0 mr-2">
          <p className="font-bold text-xl ml-2">Business</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
