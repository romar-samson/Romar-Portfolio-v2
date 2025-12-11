import Threads from "./components/Threads";

function App() {
  return (
    <>
      <section>
        <div className="w-full h-screen relative bg-black">
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>
      </section>
    </>
  );
}

export default App;
