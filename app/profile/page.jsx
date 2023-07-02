"use client";
import SignIn from "@/components/SignIn";
import { BASE_URL } from "@/config/Url";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

async function getData() {
  const res = await fetch(BASE_URL + "/users/profile", {
    headers: {
      token: localStorage.getItem("access_token"),
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Profile = async () => {
  const router = useRouter();
  const [profile, setProfile] = useState({});
  const [signIn, setSignIn] = useState(false);

  const logout = () => {
    localStorage.clear();
    router.push("/");
  };

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      return setSignIn(true);
    } else {
      const fetchData = async () => {
        const data = await getData();
        setProfile(data.user);
      };
      fetchData();
    }
  }, []);
  return (
    <>
      <SignIn setSignIn={setSignIn} signIn={signIn} />
      <div className="flex flex-col pt-28 max-w-[1480px] h-screen mx-auto">
        <div className="flex flex-wrap justify-center sm:justify-start px-6">
          <div className="h-48 w-48 sm:w-auto rounded-lg overflow-hidden mb-4">
            <Image
              className="object-cover w-full h-full"
              width={400}
              height={400}
              src="https://upload.wikimedia.org/wikipedia/id/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
              alt="IMAGE"
            />
          </div>
          <div className="h-auto w-auto flex flex-col items-center sm:items-start px-8 justify-between py-3">
            <div>
              <h2 className="text-2xl font-bold">{profile.username ?? "Account Name"}</h2>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-2" onClick={logout}>
              <p className="font-bold">LOGOUT</p>
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
    </>
  );
};

export default Profile;
