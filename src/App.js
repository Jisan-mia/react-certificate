import CertificateGenerator from "./components/CertificateGenerator";

function App() {
  return (
    <div className="container px-[4%]">
      <h1 className="text-center text-xl font-semibold mt-2">Certificate Generator</h1>

      {/* certificate generator component */}
      <CertificateGenerator />
    </div>
  );
}

export default App;
