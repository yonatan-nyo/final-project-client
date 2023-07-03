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

const Profile = () => {
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
        setProfile(data.userProfile.user);
      };
      fetchData();
    }
  }, []);
  return (
    <>
      <SignIn setSignIn={setSignIn} signIn={signIn} />
      <div className="flex flex-row pt-28 max-w-[1480px] h-screen mx-auto pb-20">
        <div className="flex flex-col w-[500px] justify-start px-6 h-full items-start bg-slate-100 mr-3 pt-4 rounded-xl">
          <div className="h-48 w-48 sm:w-auto rounded-lg overflow-hidden mb-4">
            <Image
              className="object-cover w-full h-full"
              width={400}
              height={400}
              src="https://upload.wikimedia.org/wikipedia/id/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
              alt="IMAGE"
            />
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start px-4">
            <div className="h-auto w-auto flex flex-col items-center sm:items-start justify-between py-3">
              <div className="mb-2">
                <h2 className="text-2xl font-bold">{profile?.username ?? "Account Name"}</h2>
              </div>
              <div className="flex justify-center sm:justify-start">
                <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-2" onClick={logout}>
                  <p className="font-bold">LOGOUT</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-start space-y-4 px-6 mt-4 w-full mb-10 border-l-2 border-slate-400">
          <div className="flex-grow h-auto w-full sm:w-1/2 rounded mb-2 sm:mr-2 sm:mb-0 mr-2">
            <div className="flex items-center mt-2">
              <p className="font-bold text-xl ml-2 mr-2">Business</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white rounded-md shadow-lg flex py-1 px-2"
                onClick={() => router.push("/invest/add")}>
                <p className="flex items-center gap-2">
                  <span className="text-2xl p-0">+</span>Add
                </p>
              </button>
            </div>
          </div>
          <div className="flex-auto w-full sm:w-1/2 h-auto rounded mb-2 sm:mr-2 sm:mb-0 mr-2 border-t-2 pt-2 border-slate-400">
            <p className="font-bold text-xl ml-2">Investments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
