"use client";

import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import Image from "next/image";
import { BASE_URL } from "@/config/Url";
import { useRouter } from "next/navigation";
// import "mapbox-gl/dist/mapbox-gl.css";
// import "react-toastify/dist/ReactToastify.css";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";
import { ToastContainer, toast } from "react-toastify";

const stripePromise = loadStripe(
  "pk_test_51NPcQ6ISk7K0qdKAKVPttTgpEXm5kd34yTtUurAg1YQxeAVqRFKwMg5SAqcWdtoFWDHxJpuAG9xzztvjiYWJNEdc00NW8JDNeH"
);

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHVpZ2kiLCJhIjoiY2xnYjhxbzdhMXA4ZTNsbzd2Nm80OWsycSJ9.bIZhzPsqKFWtpMgJHDfM7Q";

const DetailPage = ({ params }) => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [dataResPayment, setDataResPayment] = useState("");
  const [showCheckout, setShowCheckout] = useState(null);
  const [showInvest, setShowInvest] = useState(false);
  const [options, setOptions] = useState({
    clientSecret: "",
    appearance: {
      theme: "stripe",
    },
  });

  const payment = async () => {
    try {
      if (!localStorage.getItem("access_token")) throw "Please login first";

      const response = await fetch(BASE_URL + "/payments/init", {
        method: "POST",
        headers: {
          token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          BussinessId: data._id,
          amount: 100000,
        }),
      });
      const dataRes = await response.json();
      router.push(
        "/invest/" +
          params.slug +
          `?payment_intent=${dataRes.paymentIntent.id}&payment_intent_client_secret=${dataRes.clientSecret}`
      );

      setDataResPayment(dataRes);
      setOptions((options) => {
        return { ...options, clientSecret: dataRes.clientSecret };
      });
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 0, // starting zoom
      interactive: false,
    });

    const getDataSlug = async () => {
      try {
        let UserId = null;
        if (localStorage.getItem("access_token")) {
          const res = await fetch(BASE_URL + "/users/profile", {
            headers: {
              token: localStorage.getItem("access_token"),
            },
          });

          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }

          const detailUser = await res.json();
          UserId = detailUser.userProfile.user._id;
        }

        const res = await fetch(`${BASE_URL}/bussinesses/${params.slug}`);
        if (!res.ok) throw await res.json();
        const data = await res.json();

        let isUserFunded = false;
        let isUserOwner = false;
        let isFundedFull = false;
        if (UserId) {
          if (data.fundReceived.length === 40) {
            isFundedFull = true;
          }

          data.fundReceived.forEach((el) => {
            if (el.UserId === UserId) {
              isUserFunded = true;
            }
          });
          if (data.UserId === UserId) {
            isUserOwner = true;
          }

          if (!isUserFunded && !isUserOwner && !isFundedFull) {
            setShowInvest(true);
          }
        } else {
          setShowInvest(true);
        }

        map.flyTo({
          center: data.locations,
          zoom: 9,
          speed: 1.5,
          curve: 1.4,
          essential: true,
        });
        new mapboxgl.Marker().setLngLat(data.locations).addTo(map);
        setData(data);
      } catch (error) {
        console.log(error);
        router.push("/invest");
      }
    };
    getDataSlug();

    return () => {
      map.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (dataResPayment !== "") {
      setShowCheckout(true);
    }
  }, [dataResPayment]);

  return (
    <>
      <ToastContainer />

      <div className="flex flex-col justify-between min-h-screen text-center">
        <div
          id="map"
          className="w-screen mt-20 h-[25vh] bg-[#ebebeb] sticky top-0 left-0 z-0"
        />

        {/* Content */}
        <div className="absolute top-0 left-0 mt-20 py-[16vh] h-auto flex flex-col w-screen mx-auto">
          <section className="w-full max-w-[1450px] mx-auto flex justify-start overflow-x-hidden">
            <div className="h-[20vh] px-4">
              <Image
                className="object-cover w-auto h-full rounded-lg border-4 border-slate-200"
                width={400}
                height={400}
                src={
                  data?.brandUrl ??
                  "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-icon-default-avatar-profile-icon-vector-social-media-user-image-208413309.jpg"
                }
                alt="IMAGE"
              />
            </div>
            <div className="text-left flex flex-col justify-end">
              <p className="font-bold text-xl bg-white/80 p-2 rounded-md w-fit">
                Minimum fund: (
                {Math.ceil(+data?.fundNeeded / 40).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
                )
              </p>
              <p className="font-bold text-4xl mt-4">{data?.name}</p>
              <div className="flex gap-4 mt-2">
                {showInvest && (
                  <a
                    className="bg-blue-500 hover:bg-blue-700 text-white rounded-md shadow-lg py-1 px-2"
                    onClick={payment}
                  >
                    PRE-ORDER Rp 100.000,00
                  </a>
                )}
                <a
                  href={data?.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 bg-white hover:brightness-90 rounded-md shadow-lg w-fit py-1 px-2 flex justify-center items-center"
                >
                  <p className="text-blue-500">PROSPEKTUS</p>
                </a>
              </div>
            </div>
          </section>
          <section className="w-full max-w-[1450px] mx-auto justify-start mt-10 gap-4 px-4">
            <div className="w-72 h-72 flex-shrink-0 float-left p-4">
              <Image
                className="object-cover w-68 h-68 rounded-lg border-[4px] border-slate-200 shadow-lg"
                width={400}
                height={400}
                src={
                  data?.imagesUrl ??
                  "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-icon-default-avatar-profile-icon-vector-social-media-user-image-208413309.jpg"
                }
                alt="IMAGE"
              />
            </div>
            <div className="flex-grow text-left">
              <p className="font-bold text-2xl">Overview</p>
              <p className="font-light whitespace-pre-line">{data?.overview}</p>
            </div>
          </section>
        </div>
      </div>

      {options?.clientSecret && showCheckout && (
        <div className="Stripe fixed top-0 flex w-screen h-screen justify-center items-center">
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm
              slug={params.slug}
              detail={dataResPayment}
              setShowCheckout={setShowCheckout}
            />
          </Elements>
        </div>
      )}
    </>
  );
};

export default DetailPage;
