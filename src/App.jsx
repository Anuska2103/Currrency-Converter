import { useState } from 'react'
import { useEffect } from 'react'
import { Input } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount]=useState(0)
  const [from, setFrom]=useState("usd")
  const [to,setTo] = useState("inr")
  const [convert, setConvert]= useState(0)

  const currenyInfo=useCurrencyInfo(from)

  const options=Object.keys(currenyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
     setConvert(amount)
     setAmount(convert)
  }
  const converted=()=>{
    setConvert(amount*currenyInfo[to])
  }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-slate-500"
              style={{
        backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <div><h1 className='flex flex-wrap p-1.5 justify-center
                     text-2xl  text-blue-800 font-extrabold font-serif underline items-center'>Currency Converter</h1></div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            converted()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onAmountChange={(amount)=>
                                  setAmount(amount)}
                                onCurrencyChnage={(currency)=>
                                  setFrom(currency)}
                                selectCurrency={from}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convert}
                                currencyOption={options}
                                onCurrencyChnage={(currency)=>
                                  setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

 
}

export default App
