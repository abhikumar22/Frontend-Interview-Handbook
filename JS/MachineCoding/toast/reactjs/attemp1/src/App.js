import useToaster from './ToastComponent'
const App = () =>{

  const {toast} = useToaster();

  const handleClick = (type) =>{
    switch (type) {
      case 'error':
        toast.error("error")
        break;
      case 'info':
        toast.info("Info")
        break;
      case 'success':
        toast.success("success")
        break;
    
      default:
        break;
    }
  }
  return(
      <div>
          <button onClick={()=>handleClick('error')}>Error</button>
          <button onClick={()=>handleClick('info')}>Info</button>
          <button onClick={()=>handleClick('success')}>Success</button>

      </div>
  )

}

export default App;