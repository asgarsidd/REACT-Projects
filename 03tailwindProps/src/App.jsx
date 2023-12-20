import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "Asgar",
    age: 23
  }
  let newArray = [1,3,4,];

  return (
    <>
      
      <h1 className='bg-green-400 text-black p-4 rounded-2xl font-bold mb-4'>Tailwind Test</h1>
      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/15052340/pexels-photo-15052340/free-photo-of-a-woman-wearing-a-scarf.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
      <Card username="Asgar" someObj={myobj.age} arrayN={newArray} btnText="Click me"/>
      <Card username="Bhaskar" someObj={myobj.age} btnText="visit me"/>
      
      
     

    </>
  )
}

export default App
