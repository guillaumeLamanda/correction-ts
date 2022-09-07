import { configureStore, createAction, createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import { RuleProps } from "../components/Rule/Rule";

export const addRules = createAction<RuleProps[]>("ADD_RULES")
export const like = createAction<RuleProps>("LIKE")
export const dislike = createAction<RuleProps>("DISLIKE")

const rulesEntity = createEntityAdapter<RuleProps>({
})

const rulesSelector = rulesEntity.getSelectors<RootState>((state) => state.rules)

const rulesEntityReducer = createReducer(rulesEntity.getInitialState(), builder => {
  builder.addCase(addRules, rulesEntity.addMany)
    .addCase(like, (state, action) => {
      const rule = state.entities[action.payload.id]
      if (!rule) return state
      rule.likes = rule.likes + 1
      rulesEntity.setOne(state, rule)
    })
    .addCase(dislike, (state, action) => {
      const rule = state.entities[action.payload.id]
      if (!rule) return state
      rule.dislikes = rule.dislikes + 1
      rulesEntity.setOne(state, rule)
    })
})

type RootState = ReturnType<typeof store.getState>
export const getRules = rulesSelector.selectAll

export const store = configureStore({
  reducer: {
    rules: rulesEntityReducer,
  }
})

