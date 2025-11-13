import { useEffect } from "react";
import { useRouter } from "next/router";

export default function usePaypalCart() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/merch") return;

    let pollInterval;

    const initCart = () => {
      if (!window.cartPaypal) return;

      // Add products (won't duplicate if already in cart)
      const products = [
        "RWJ3X5N6BWQDW",
        "KN9VT6H4LBNHW",
        "JPT8WNM8TQ83W",
        "X3Y64G37SMVH2",
      ];

      products.forEach((id) => {
        try {
          window.cartPaypal.AddToCart({ id });
        } catch (e) {
          console.warn("Could not add to cart:", id, e);
        }
      });

      // Initialize cart button
      window.cartPaypal.Cart({ id: "pp-view-cart" });
    };

    const loadScripts = () => {
      if (window.cartPaypal) {
        initCart();
        return;
      }

      const sdkScript = document.createElement("script");
      sdkScript.src =
        "https://www.paypal.com/sdk/js?client-id=AXgz5VqpoO23JzH90mNz2vBKiDRIRB7OREs-LmEYALGylPsTU9Q2d-jIKSWdBF5G9mxdB3iOVX4JjDFI&components=buttons,hosted-buttons";
      sdkScript.async = true;

      const cartScript = document.createElement("script");
      cartScript.src = "https://www.paypalobjects.com/ncp/cart/cart.js";
      cartScript.setAttribute("data-merchant-id", "85AFT4H8HJVNN");
      cartScript.async = true;

      sdkScript.onload = () => document.body.appendChild(cartScript);
      cartScript.onload = () => initCart();

      document.body.appendChild(sdkScript);
    };

    loadScripts();

    // Poll PayPal cart every 500ms to sync the cart count
    pollInterval = setInterval(() => {
      const cartEl = document.querySelector("paypal-cart-button");
      if (cartEl && window.cartPaypal) {
        try {
          window.cartPaypal.Cart({ id: "pp-view-cart" });
        } catch (e) {
          console.warn("Failed to refresh PayPal cart", e);
        }
      }
    }, 500);

    return () => {
      clearInterval(pollInterval);
    };
  }, [router.pathname]);
}
