import React, { useMemo } from 'react';
import './App.css';
import RuleList from './RuleList';
import { useRules } from './useRules';

export const delay = (ms: number) => (data: any) => new Promise(resolve => setTimeout(resolve, ms))

function App() {
  const rules = useRules()
  if (rules.length === 0) {
    return <p>loading...</p>
  }
  return (
    <RuleList rules={rules} />
  );
}

export default App;
