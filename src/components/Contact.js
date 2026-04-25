const Contact = ()=> {
    return(
        <div> 
            <h1 className="font-bold text-3xl m-4 p-4">
                ....Contact Us...
            </h1>
            <form> 
                <input className="border border-black p-2 m-2 rounded-lg" type="text"  placeholder="Enter name"/>
                <input className="border border-black p-2 m-2 rounded-lg" type="text" placeholder="message" />
                <button className= " bg-black text-white m-2 p-2 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;