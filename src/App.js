import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isHidden = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const updateCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "sending cart data...",
        })
      );

      const response = await fetch(
        "https://redux-app-ecd2e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("upadating cart data failed.");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "success!",
          message: "Updated cart data successfully",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      updateCartData().catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error!",
            message: "Updated cart data failed",
          })
        );
      });
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {!isHidden && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
