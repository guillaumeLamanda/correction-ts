import { Rule, RuleProps } from "./Rule/Rule";

type RuleListProps = {
  rules: RuleProps[]
}
export default function RuleList({rules}: RuleListProps) {
  return (
    <div>
      {rules.map(rule => (
        <Rule key={rule.id} {...rule} />
      ))}
    </div>
  )
}


