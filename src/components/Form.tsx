import { currencies } from "../data"


const Form = () => {
  return (
    <form className="form">
        <div className="field">

            <label htmlFor="currency">Currency</label>
            <select name="currency" id="currency">

                <option value="">-- Select a Currency --</option>
                
                {currencies.map(currency=>(
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    )
                )}
                
            </select>

        </div>
        <div className="field">

            <label htmlFor="cryptocurrency">Cryptocurrency</label>
            <select name="cryptocurrency" id="cryptocurrency">

                <option value="">-- Select a Cryptocurrency --</option>
            </select>

        </div>

        <input type="submit" value="Calculate"/>
    </form>
  )
}

export default Form