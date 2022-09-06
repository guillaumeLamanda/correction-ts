import './App.css';
import RuleList from './RuleList';
import { useRules } from '../hooks/useRules';
import { RoleProvider } from '../contexts/RoleContext';
import { Header } from './Header';

export const delay = (ms: number) => (data: any) => new Promise(resolve => setTimeout(resolve, ms))

function App() {
  const rules = useRules()
  if (rules.length === 0) {
    return <p>loading...</p>
  }
  return (
    <RoleProvider>
      <Header />
      <RuleList rules={rules} />
    </RoleProvider>
  );
}

export default App;
