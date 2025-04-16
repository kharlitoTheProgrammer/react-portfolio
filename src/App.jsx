import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col gap-6">
        <Header />
        <main className="px-3 py-3 flex flex-col justify-center items-center font-['Satoshi']">
          <h1 className="text-gray-400 text-[2rem] ">Hello</h1>
          <h2 className="text-gray-400 text-[2rem] ">I am</h2>
          <h2 className="text-[#f5f5f5] text-[4rem] ">Kharl</h2>
          <div className="mx-4 flex flex-col gap-5 mt-10">
            <span className="text-gray-400 text-[1.5rem] ">
              Frontend Developer
            </span>
            <p className="text-gray-400 text-[1rem] ">
              Crafting clean, responsive interfaces with a focus on usability
              and simplicity. Experienced in building modern web applications
              using Vue.js, Tailwind CSS, and API integration to create seamless
              user experiences.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
