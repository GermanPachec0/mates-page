import { useState } from "react"

export const ContactButton = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
  <div className="fixed bottom-10 left-10  ">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="bg-black hover:bg-gray-400 text-white p-4 rounded-full block text-left px-2 py-2"
      title="Back to Top"
    >Redes</button>
    {isOpen && (
        <div className="absolute left-0 bottom-full mb-2">
          <div className="rounded-md shadow-xs">
            <button
              className="bg-gray hover:bg-gray-400 text-white p-4 rounded-full block text-left px-0 py-0"
              title="Back to Top"
            >
            <img src="https://firebasestorage.googleapis.com/v0/b/elchaniar-617f3.appspot.com/o/instagram.png?alt=media&token=65756eb6-6201-4961-95c2-33b9ed031bf1" className="h-15 w-25 px-2 py-2 mr-2 inline" />
            </button>
            <button
              className="bg-gray hover:bg-gray-400 text-white p-4 rounded-full block text-left mt-2 px-0 py-0"
              title="Back to Top"
            >
            <img src="https://firebasestorage.googleapis.com/v0/b/elchaniar-617f3.appspot.com/o/whatsapp.png?alt=media&token=a6b3b153-3c83-49fd-a0c7-7cf2fe1a2792" className="h-15 w-25 px-2 py-2 mr-2 inline" />
            </button>
          </div>
        </div>
    )}

  </div>
  )
}
