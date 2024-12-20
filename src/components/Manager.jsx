import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    const ref = useRef()
    useEffect(() => {
        const passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords)); // Set state with retrieved passwords
        }
    }, []);

    const showPassword = () => {
        if (ref.current.type = 'password') {
            ref.current.type = 'text'
        }
        else {
            ref.current.type = 'password'
        }
    }


    const savePassword = () => {
        if(form.username.length>3 && form.site.length>3 && form.password.length>3)
        {
            setpasswordArray([...passwordArray,{...form, id:uuidv4()} ])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]))
            console.log([...passwordArray, form]);
            setform({site: "", username: "", password: ""})
            toast.success('Password Saved!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false, 
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
            });
        }
        else
        {
            toast.error('Error : Password Not Saved!', {
                position: "bottom-left"});

        }
    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const copyText = (text) => {
        toast.success('Text Copied!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
           
            });
        navigator.clipboard.writeText(text);
    }

    const editPassword = (id) => {
        console.log("Editing password " + id);
      setform(passwordArray.filter(i=>i.id===id)[0]);
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))

    }
    
    const deletePassword = (id) => {    
    let c = confirm("Do you want to delete the data ?");
    if (c)
    {
        setpasswordArray(passwordArray.filter(item=>item.id!==id));
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
    }
    toast.success('Password Deleted!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
       
        });
    }
    
    return (
        <>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute inset-0 -z-10 h-full w-full bg-orange-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-400 opacity-20 blur-[100px]"></div></div>

            <div className="md:mycontainer p-2 md:p-0 min-h-[95.6vh]"> 

                <h1 className='text-2xl text-center font-bold'><span className='text-orange-900'>
                    &#123;
                </span>
                    Pass
                    <span className='text-orange-700'>Manage</span>
                    <span className='text-orange-900'>
                        &#125;
                    </span></h1>
                <p className='text-lg text-orange-700 text-center'>Your Personal Password Manager</p>
                <div className="text-black flex flex-col p-4 gap-6">
                    <input name='site' value={form.site} onChange={handleChange} placeholder='Enter Website URL' className="flex rounded-full border border-orange-600 w-full px-4 py-1" type="text" />

                    <div className="relative flex w-full gap-8 justify-between">
                        <input name='username' value={form.username} onChange={handleChange} placeholder='Enter Username' className="flex rounded-full border border-orange-600 w-full px-4 py-1" type="text" />
                        <input name='password' value={form.password} onChange={handleChange} placeholder='Enter Password' className="flex rounded-full border border-orange-600 w-full px-4 py-1" type="password" /><span className='absolute right-4 top-1 cursor-pointer'></span>
                    </div>

                </div >
                <div className='flex justify-center items-center '>
                    <button onClick={savePassword} className='px-5 gap-2 py-1 border border-orange-900 rounded-full bg-orange-500 hover:bg-orange-300 hover:font-semibold'>Add Password</button>
                </div>

                <div className="passwords ">
                    <h2 className='font-bold py-4 text-2xl'>Your Passwords</h2>


                    {passwordArray.length === 0 && <div>No Passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full overflow-hidden rounded-md">
                        <thead className='bg-orange-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-orange-100 '>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center w-[30%]'> <a href={item.site} target='_blank'>{item.site}</a> <button className='p-1' onClick={() => { copyText(item.site) }}><img className='w-4' src="/copy.png" alt="" /></button></td>

                                    <td className='py-2 border border-white text-center w-[30%]'>{item.username} <button onClick={() => { copyText(item.username) }} className='p-1' ><img className='w-4' src="/copy.png" alt="" /></button></td>

                                    <td className='py-2 border border-white text-center w-[30%]'>{item.password}  <button onClick={() => { copyText(item.password) }} className='p-1' ><img className='w-4' src="/copy.png" alt="" /></button></td>

                                    <td className='py-2 border border-white flex justify-center text-center '>
                                        <button onClick={()=>{editPassword(item.id)}}>
                                            <img  width={31} src="/edit.svg" alt="edit" />
                                        </button>
                                        <button onClick={()=>{deletePassword(item.id)}}>
                                            <img width={35} src="/delete.svg" alt="edit" />
                                        </button>
                                    </td>
                                </tr>
                            })}


                        </tbody>
                    </table>
                    }</div>
            </div>
        </>
    )
}

export default Manager
