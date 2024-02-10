import '../scss/App.scss'
import Header from './Header.jsx'
import Form from './Forms.jsx'
import TasksList from './Taskslist.jsx'
import TipsList from './Tipslist.jsx'



function App() {
  return (
    <div>
      <Header/>
    <main className="main">
        <Form/>
        <TasksList/>
        <TipsList/>

    </main>

    </div>
  )
}

export default App
