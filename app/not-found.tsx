import { Metadata } from "next";
import Navigation from "../components/navigation";
export const metadata: Metadata = {
  title: "not found",
};

export default function NotFound() {
  return (
    <div>
      <Navigation />
      <h1>Not Found!</h1>
    </div>
  );
}
