import { useContext, useMemo } from "react";
import { RoleContext } from "../contexts/RoleContext";
import { useRules } from "../hooks/useRules";
import { Rule  } from "./Rule/Rule";

export default function RuleList() {
  const { role } = useContext(RoleContext)
  const rules = useRules()
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


