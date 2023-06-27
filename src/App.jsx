import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
 const sendEmail=(e)=>{
  e.preventDefault()
  emailjs.send('<YOUR_SERVICE_ID>','<YOUR_TEMPLATE_ID>', e.target, '<YOUR_PUBLIC_KEY>')
	.then((result) => {
    if(result.status===200){
      toast.success("success",{position:"top-left",closeOnClick:true})
     }
	}, (err) => {
	   console.log("error");
	});
 }
  return (
    <div className='container py-5'>
     <div className="row py-5 justify-content-center">
      <div className="col-md-4 bg-white p-5 mt-5">
        <h2 className="pb-5 text-center">send mail to boss</h2>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" name="name" placeholder='yout name' className='form-control p-3'/>
          </div>
          <div className="form-group">
            <input type="text" name="email"placeholder='yout mail' className='form-control p-3'/>
          </div>
          <div className="form-group">
           <textarea name="massage" placeholder="your massage" className="form-control"></textarea>
          </div>
          <div className="form-group">
           <button type="submit" className="btn btn-success w-100 p-3 mt-5" >submit</button>
          </div>
        </form>
      </div>
     </div>
     <ToastContainer/>
    </div>
  );
}

export default App;
