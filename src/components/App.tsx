import './App.css';
import RuleList from './RuleList';
import { useRules } from '../hooks/useRules';
import { RoleProvider } from '../contexts/RoleContext';
import { Header } from './Header';
import { BrowserRouter, Outlet, Route, Routes, useParams } from 'react-router-dom';
import { Menu } from './Menu';
import { RuleProps } from './Rule/Rule';

export const delay = (ms: number) => (data: any) => new Promise(resolve => setTimeout(resolve, ms))

function Layout() {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
    </>
  )
}

function useRule(id: number): RuleProps | undefined {
  const rules = useRules()
  return rules.find(r => r.id === id)
}

function RuleForm () {
  const params = useParams<{id: string}>()
  const rule = useRule(Number(params.id))

  return (
    <form>
      <input className='border rounded m-4 p-4 shadow-lg' defaultValue={rule?.title} />
    </form>
  )
}

function App() {
  return (
    <RoleProvider>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Layout />}>
            <Route path='/' element={<RuleList />} />
            <Route path='/new' element={<RuleForm />} />
            <Route path='/edit/:id' element={<RuleForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RoleProvider>
  );
}

export default App;
