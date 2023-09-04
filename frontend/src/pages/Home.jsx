import Header from '../components/Header'
import {useSelector} from 'react-redux'
import Paypal from '../components/Paypal'
import PaypalPayment from '../components/PaypalPayment'

function Home(){
    const {user} =useSelector(state=>state.auth)
    return (
        <div>
            <div className='mt-5 py-5 text-center'>
               <h1>Welcome to the Basic app for Users Management ...</h1> 
               {user&&<h3 className='text-success'>You are connected with {user.email}</h3>}
            </div>
            <PaypalPayment/>
        </div>
    )
}
export default Home