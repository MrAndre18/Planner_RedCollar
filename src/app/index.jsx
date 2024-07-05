import { MainLayout } from 'src/shared/UI/main-layout';
import './index.scss';
import { Header } from 'src/widgets/header';

const App = () => {
  return (
    <div className='app'>
      <MainLayout>
        <Header />
      </MainLayout>
    </div>
  )
}

export default App