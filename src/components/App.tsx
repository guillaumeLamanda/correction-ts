import './App.css';
import RuleList from './RuleList';
import { useRules } from '../hooks/useRules';
import { RoleProvider } from '../contexts/RoleContext';
import { Header } from './Header';
import { BrowserRouter, Outlet, Route, Routes, useParams } from 'react-router-dom';
import { Menu } from './Menu';
import { RuleProps } from './Rule/Rule';
import { Form, FormikProvider, Field, useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { updateRule } from '../store/rules.store';

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


type FormData = Pick<RuleProps, 'title' | 'description'>

function RuleForm() {
  const params = useParams<{ id: string }>()
  const rule = useRule(Number(params.id))
  const dispatch = useDispatch()
  

  const form = useFormik<FormData>({
    initialValues:  {
      title: rule?.title ?? '',
      description: rule?.description ?? ''
    },
    onSubmit: (values) => {
      if(rule) {
        dispatch(updateRule({...rule, ...values}))
      }


    }
  })

  return (
    <FormikProvider value={form}>
      <Form className='flex flex-col p-10 max-w-md gap-6 '>
        <Field name='title' component='input' className='rounded borded border-2 border-blue-100 hover:border-blue-500 transition-all duration-500' />
        <Field name='description' className='rounded borded border-2 border-blue-100 hover:border-blue-500 transition-all duration-500' />
        <button type='submit'>Submit</button>
      </Form>
    </FormikProvider>
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
