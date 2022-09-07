import { useEffect, } from 'react';
import { RuleProps } from '../components/Rule/Rule';
import { delay } from '../components/App';
import { useDispatch, useSelector } from 'react-redux';
import { addRules, getRules } from '../store/rules.store';

export function useRules() {
  const rules = useSelector(getRules)
  const dispatch = useDispatch()

  const setRules = (rules: RuleProps[]) => {
    dispatch(addRules(rules))
  }

  useEffect(() => {
    async function getRules(url: string): Promise<RuleProps[]> {
      const data = await fetch(url);
      const json = await data.json();
      await delay(1000)(json);
      return json;
    }

    if (rules.length === 0) {
      Promise.all([
        getRules("/data.json"),
        getRules("/data2.json")
      ]).then(([data, data2]) => setRules([...data, ...data2]));

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rules]);

  return rules;

}

