// pages/index.js (or any other component file)
import MainWindow from './views/mainWindow';

export default function Home() {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <MainWindow />
    </div>
  );
}
