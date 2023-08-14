// pages/index.js (or any other component file)
import MainWindow from "./pages/views/mainWindow";

export default function Home({ session }) {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <MainWindow session={session} />
    </div>
  );
}
