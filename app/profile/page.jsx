"use client";
import SignIn from "@/components/SignIn";
import { BASE_URL } from "@/config/Url";
import Image from "next/image";
import Link from "next/link";
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
  const [Businesses, setBusinesses] = useState([]);
  const [investments, setInvestments] = useState([]);
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
        setBusinesses(data.userBusinesses);
        setInvestments(data.userFunds);
      };
      fetchData();
    }
  }, []);
  return (
    <>
      <SignIn setSignIn={setSignIn} signIn={signIn} />
      <div className="flex flex-col sm:flex-row pt-28 max-w-[1480px] h-screen pb-20 mx-auto px-4 gap-4">
        <div className="flex flex-col w-full sm:w-[500px] justify-start px-6 h-full items-start border-4 shadow-lg border-slate-200 mr-3 spy-2 m:py-4 rounded-xl">
          <p className="mt-10 mb-4 w-full font-bold text-4xl text-center">PROFILE</p>
          <div className="h-48 rounded-lg overflow-hidden mb-4 w-full">
            <Image
              className="object-contain w-auto h-full mx-auto border-4 rounded-lg border-slate-400"
              width={400}
              height={400}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ml3ZJnxF2DeDBTq3qMFURQx40RPvTrtntJzPLf0zf0WWBd2q-VmUYFrOL24SHiBamiM&usqp=CAU"
              alt="IMAGE"
            />
          </div>

          <div className="flex flex-wrap justify-center w-full px-4">
            <div className="h-auto w-auto flex flex-col items-center sm:items-start justify-center py-3">
              <div className="mb-2">
                <h2 className="text-2xl font-bold">{profile?.username ?? "Account Name"}</h2>
              </div>
              <div className="flex justify-center w-full">
                <a className="bg-red-500 text-white px-4 py-2 rounded-full mt-2" onClick={logout}>
                  <p className="font-bold">LOGOUT</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-start space-y-4 pb-6 w-full mb-10 rounded-xl">
          <div className="flex flex-col flex-grow h-auto w-full sm:w-1/2 rounded mb-2 sm:mr-2 sm:mb-0 mr-2 bg-slate-100 p-2 shadow-lg border-slate-300 border-2">
            <div className="flex items-center mt-2 border-b-2 border-slate-400 w-full pb-2">
              <p className="font-bold text-xl ml-2 mr-2">Business</p>
              <a
                className="bg-blue-500 hover:bg-blue-700 text-white rounded-md shadow-lg flex py-1 px-2"
                onClick={() => router.push("/invest/add")}>
                <p className="flex items-center gap-2">
                  <span className="text-2xl p-0">+</span>Add
                </p>
              </a>
            </div>
            <ul className="mt-5 flex-grow flex flex-wrap gap-2 pb-4 overflow-y-scroll">
              {Businesses?.length ? (
                Businesses?.map((el, i) => (
                  <Link key={i} href={"/invest/" + el.slug}>
                    <li className="h-full w-40 px-2 py-4 border-[3px] bg-white border-slate-400 rounded-md flex flex-col items-center gap-2 shadow-lg">
                      <Image
                        alt={el.name}
                        width={400}
                        height={400}
                        src={el.brandUrl}
                        className="flex-grow h-20 w-full object-contain rounded-md"
                      />
                      <p
                        className="pt-2 border-t-2 w-full text-center border-slate-200 uppercase tracking-wider font-semibold"
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}>
                        {el.name}
                      </p>
                    </li>
                  </Link>
                ))
              ) : (
                <li>No Business Published</li>
              )}
            </ul>
          </div>
          <div className="flex-auto w-full sm:w-1/2 h-auto rounded mb-2 sm:mr-2 sm:mb-0 mr-2 bg-slate-100 p-2 shadow-lg border-slate-300 border-2">
            <p className="font-bold text-xl mx-1 border-b-2 border-slate-400 w-auto pb-2">
              Investments <span className="text-sm font-normal">(click to open)</span>
            </p>
            <ul className="list-disc ml-10 mt-5">
              {investments?.map((el, i) => (
                <li key={i}>
                  <Link
                    href={
                      "/invest/" +
                      el.bussinessName
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w\-]+/g, "")
                        .replace(/\-\-+/g, "-")
                        .replace(/^-+/, "")
                        .replace(/-+$/, "")
                    }>
                    <p className="text-left font-semibold text-blue-600">{el.bussinessName}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
