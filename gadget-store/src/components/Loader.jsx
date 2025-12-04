import "../styles/loader.css";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="spinner"></div>
      <p>Processing payment...</p>
    </div>
  );
}
