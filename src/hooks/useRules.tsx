import { useEffect, useState } from 'react';
import { RuleProps } from '../components/Rule/Rule';
import { delay } from '../components/App';

export function useRules() {
  const [rules, setrules] = useState<RuleProps[]>([]);

  useEffect(() => {
    async function getRules(url: string): Promise<RuleProps[]> {
      const data = await fetch(url);
      const json = await data.json();
      await delay(1000)(json);
      return json;
    }

    Promise.all([
      getRules("/data.json"),
      getRules("/data2.json")
    ]).then(([data, data2]) => setrules([...data, ...data2]));
  }, []);

  return rules;

}

