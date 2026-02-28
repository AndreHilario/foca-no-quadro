import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/features/layout/layout";
import { Home } from "@/features/home/home";
import { ProductDetailPage } from "@/pages/ProductDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:productId", element: <ProductDetailPage /> },
    ],
  },
]);