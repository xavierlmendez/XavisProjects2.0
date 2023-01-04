import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //bg-mainImage refers to mainImage specified in tailwind.config.js under backGround
    //min-h-screen makes the vertical size of the background image fit the device screen
    <body className ="bg-mainImage bg-no-repeat bg-cover bg-center bg-fixed min-h-screen">
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action ya boiiii
      </p>
    </div>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action ya boiiii
      </p>
    </div>
    </body>
  );
}

export default App;
