import { useContext, useMemo } from "react";
import { RoleContext } from "../contexts/RoleContext";
import { Rule, RuleProps } from "./Rule/Rule";

type RuleListProps = {
  rules: RuleProps[]
}
export default function RuleList({ rules }: RuleListProps) {
  const { role } = useContext(RoleContext)
  const filteredRules = useMemo(() => 
    rules.filter(rule => rule.status === 'validated' || role === 'admin'),
    [rules, role]
  );

  return (
    <div>
      {filteredRules.map(rule => (
        <Rule key={rule.id} {...rule} />
      ))}
    </div>
  )
}


