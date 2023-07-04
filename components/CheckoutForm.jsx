import React, { useEffect, useState } from "react";
import { PaymentElement, LinkAuthenticationElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BASE_URL } from "@/config/Url";
import { useRouter } from "next/navigation";
import "./Stripe.css";

const CheckoutForm = ({ slug, detail, setShowCheckout }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // stripe.retrievePaymentIntent(detail.clientSecret).then(({ paymentIntent }) => {
    //   switch (paymentIntent.status) {
    //     case "succeeded":
    //       setMessage("Payment succeeded!");
    //       break;
    //     case "processing":
    //       setMessage("Your payment is processing.");
    //       break;
    //     default:
    //       setMessage("Something went wrong.");
    //       break;
    //   }
    // });
  }, [stripe, detail, slug, router, setShowCheckout]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    const res = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/invest/" + slug,
      },
      redirect: "if_required",
    });

    if (res.error) {
      setMessage(error.message);
    }
    if (res.paymentIntent?.status === "succeeded") {
      setMessage("Payment in process!, but please dont close this window");
      const response = await fetch(BASE_URL + "/payments/success", {
        method: "POST",
        headers: {
          token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentIntent: res.paymentIntent,
          detail,
          slug,
        }),
      });
      if (response.ok) {
        router.push("https://final-project-client-virid.vercel.app/invest"); // Redirect to the return_url provided by the server
        setShowCheckout(false);
      } else {
        setMessage("An error occurred while processing the payment.");
      }
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="bg-white">
      <LinkAuthenticationElement id="link-authentication-element" onChange={(e) => setEmail(e?.target?.value)} />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button id="submit" disabled={!stripe || isLoading}>
        <span id="button-text">{isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}</span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};
export default CheckoutForm;
